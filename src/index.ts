import crypto from 'crypto';

interface ContentPayload {
  secret: string;
  content: string;
}

const decryptContent = (
  privateKey: crypto.KeyLike,
  { secret, content }: ContentPayload
) => {
  const debunkedKey = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    Buffer.from(secret, 'base64')
  );

  const buffContent = Buffer.from(content, 'base64');
  const nonce = buffContent.slice(buffContent.length - 12, buffContent.length);
  const cipher = buffContent.slice(0, buffContent.length - 12);
  const tag = cipher.slice(cipher.length - 16, cipher.length);
  const data = cipher.slice(0, cipher.length - 16);
  let decipher = crypto.createDecipheriv('aes-256-gcm', debunkedKey, nonce);
  decipher.setAuthTag(tag);
  let dec = Buffer.concat([decipher.update(data), decipher.final()]);
  return JSON.parse(dec.toString());
};

decryptContent.default = decryptContent;
export = decryptContent;
