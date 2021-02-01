# Tokopedia Decrypt Node

Simple package to decrpyt Tokopedia Open API Platform content with `crypto` package.

## Instalation

```
npm install tokopedia-decrypt-node

- or -

yarn tokopedia-decrypt-node
```

## Basic Usage

```js
const fs = require('fs');
const decryptContent = require('tokopedia-decrypt-node');

/** Locate your private key **/
const privateKey = fs.readFileSync('/home/naupaw/private-key');

/** let asume we got webhook payload like this */
const webhookPayload = {
  fs_id: 123456,
  order_id: 123456,
  invoice_ref_num: 'INV/XXXXXX/XXI/II/XXXXXX',
  products: [
    {
      id: 123456,
      name: 'Team T-Force Vulcan 16GB (8GBx2) SO-DIMM DDR4 2666',
      notes: '',
      currency: 'Rp.',
      weight: 1,
      total_weight: 1,
      price: 2000,
      total_price: 2000,
      quantity: 1,
      sku: '-',
    },
  ],
  customer: {
    id: 123456,
    name: '',
    phone: '',
    email: '',
  },
  recipient: {
    name: '',
    phone: '',
    address: {
      address_full: '',
      district: 'Kaway XVI',
      city: 'Kab. Aceh Barat',
      province: 'D.I. Aceh',
      country: 'Indonesia',
      postal_code: '23681',
      district_id: 1,
      city_id: 1,
      province_id: 1,
      geo: ',',
    },
  },
  shop_id: 123456,
  warehouse_id: 123456,
  shop_name: 'SellerAPI-xxxx',
  payment_id: 123456,
  payment_date: '2021-02-01T13:29:44Z',
  logistics: {
    shipping_id: 1,
    district_id: 1,
    city_id: 1,
    province_id: 1,
    geo: ',',
    shipping_agency: 'JNE',
    service_type: 'Reguler',
  },
  amt: {
    ttl_product_price: 2000,
    shipping_cost: 28000,
    insurance_cost: 0,
    ttl_amount: 30000,
    voucher_amount: 0,
    toppoints_amount: 0,
  },
  dropshipper_info: {
    name: '',
    phone: '',
  },
  voucher_info: {
    voucher_code: '',
    voucher_type: 0,
  },
  device_type: '',
  create_time: 1612186181,
  order_status: 10,
  accept_partial: false,
  encryption: {
    secret:
      'K6mT7ybBa35HbUBuJgOYWek53jMWw5BSXsWy0f3pQ8EgFnXUxIZk9Z6PrcUT037zL6e+pjCJxIViSTr78kH7InZ/2mOaP1bNc5bQ22yZReNwXSHUOtD1pUUmIzkaV7Lxuq+jssD1+0Rd/QTc9bomyQngSf6txQjiH/ckT5B9+Dc3QelVkKGt6pmFC6GlpyCW2YQavnkN8psCS5y691XkrM1ankEUw8e4HcKyF8+GqSsVt1hQtyV7fHkFFnmTHqcMWDMAwVG1leskBlH6lJAIcN+O02ixVlm+SYGbnXEFPgYGkelR0Hc3Sd9t6kdgYa6pdBVYLoL2wQpClsQKGgaIyVdJBxXhNKkRlFtAOuV3xPx+ykZc5dnOH4iQuwBX+SvaGYQY4xbwIzVt5nNfGrqHuiHma+E38UshhShMVhyUc7qbC+PtFVRHcMrqY5dEmHx4xB2vMoTFKV9Prgp315dPMX13SKuF03//AqWkGpG2/yjBYfZ6mq6ywK2m18rscK9IKc5ATbBBmODB4S1aNinuYX/H3UHOKWl3mycFKtrb2vet4muhHnnKuw9Y/3QCIo2+W89aFbIkh9V8MfGkvpmCRM3X1FLsV4mU8vBf7nTg6kI8SbrUmtF+bEU770LtO/hlk9/wquZPMgd+hHL33jyWFUW1Sc9cKiDXlPM0',
    content:
      'gYxYeHU9/bcJyxUqqrUaPYHQRlKRJHus6x1Ifv9E1XoZ5QQ7FUym5g4elNiCrzKfBqSXV1iOdP0zDN+EwniLEvIRVzwFubxIqdps32KP4ZOjrRp2U+3JdMlw8SAiu0DERfDNkwVHhiNzG8fwMvV4FRj4U2yRB7Y=',
  },
};

const result = decryptContent(privateKey, webhookPayload.encryption);

console.log(result); /* { customer: { ... }, recipient: { ... } } */
```

## Method

`decryptContent(privateKey: crypto.KeyLike, { secret: string, content: string }): any`

### privateKey: `crypto.KeyLike`

A private key can be string, file buffer or KeyObject

### encryption: `{ secret: string, content: string }`

- **secret**: encrypted secret string
- **content**: encrypted content string

Open API Documentation:
https://developer.tokopedia.com/openapi/guide/#/encryption/decryption
