<template>
  <div class="flex items-center justify-center w-full h-full">
    <button @click="startRun" class="bg-neutral-700 p-2" type="">START</button>

    <pre>{{ res }}</pre>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
definePageMeta({
  middleware: 'auth'
})

const data = ref([
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4009500a-fca0-11ed-0a80-0f800029660a',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=40094203-fca0-11ed-0a80-0f8000296608'
    },
    id: '4009500a-fca0-11ed-0a80-0f800029660a',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:15:23.420',
    name: 'Пилинг-маска Обновляющая 150мл',
    syncId: '5fbd7a01-ce08-4dbb-b9b6-7cb1cfb8005b',
    code: '00044',
    externalCode: '6DwLHreDhD2KG1mIBZ7sP1',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4009500a-fca0-11ed-0a80-0f800029660a/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 45800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 32300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359385' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4009500a-fca0-11ed-0a80-0f800029660a/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 10,
    reserve: 0,
    inTransit: 0,
    quantity: 10,
    barcode: '4680038359385'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/584f5aef-fca0-11ed-0a80-0c2300295f71',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=584f508b-fca0-11ed-0a80-0c2300295f6f'
    },
    id: '584f5aef-fca0-11ed-0a80-0c2300295f71',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:14:41.167',
    name: 'Очищающие пилинг-диски для сияния кожи',
    syncId: '4f0d660a-a071-459e-8acb-492a2ef08e18',
    code: '00045',
    externalCode: 'ghXe1N1khq52qRABQUWZS0',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/584f5aef-fca0-11ed-0a80-0c2300295f71/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 51000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 36300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359743' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/584f5aef-fca0-11ed-0a80-0c2300295f71/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4680038359743'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/611f01da-fc9f-11ed-0a80-110f0029303e',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=611ef736-fc9f-11ed-0a80-110f0029303c'
    },
    id: '611f01da-fc9f-11ed-0a80-110f0029303e',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:16:57.493',
    name: 'Флюид для лица Ультра увлажняющий 30мл',
    syncId: '1a981b71-954e-4dc5-b027-67947687156a',
    code: '00038',
    externalCode: 'BHvwJNszjPKKKlzWGrHuk2',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/611f01da-fc9f-11ed-0a80-110f0029303e/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 85500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 61000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359224' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/611f01da-fc9f-11ed-0a80-110f0029303e/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4680038359224'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/70f2cd31-fca0-11ed-0a80-0f8000296e3d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=70f2c203-fca0-11ed-0a80-0f8000296e3b'
    },
    id: '70f2cd31-fca0-11ed-0a80-0f8000296e3d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:14:19.487',
    name: 'Очищающие пилинг-диски для идеальной кожи',
    syncId: '12b22944-0fc8-4d95-834c-697ac0868c80',
    code: '00046',
    externalCode: '-FJoH0wQhM3l-lm22akUN1',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/70f2cd31-fca0-11ed-0a80-0f8000296e3d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 51000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 36300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359750' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/70f2cd31-fca0-11ed-0a80-0f8000296e3d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4680038359750'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7a5b5e51-fc9f-11ed-0a80-000f00291316',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=7a5b55a7-fc9f-11ed-0a80-000f00291314'
    },
    id: '7a5b5e51-fc9f-11ed-0a80-000f00291316',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:13:20.881',
    name: 'Крем для кожи вокруг глаз "Антиоксидантный" 30мл',
    syncId: 'fa968d09-2880-4b63-adbf-33ddb508eaff',
    code: '00039',
    externalCode: '94Xdg1Z6jMv8-5KkfHaNT1',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7a5b5e51-fc9f-11ed-0a80-000f00291316/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 49800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 35200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359231' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7a5b5e51-fc9f-11ed-0a80-000f00291316/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4680038359231'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8ad9cd43-fca0-11ed-0a80-0f800029730b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=8ad9c138-fca0-11ed-0a80-0f8000297309'
    },
    id: '8ad9cd43-fca0-11ed-0a80-0f800029730b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:16:01.158',
    name: 'Сыворотка для лица "Антиоксидантная" 30мл',
    syncId: '263f39d8-0274-4ab2-bb4f-9298c18c2796',
    code: '00047',
    externalCode: 'EZgRtY0ih5TXHVfCOiTOB1',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8ad9cd43-fca0-11ed-0a80-0f800029730b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 49800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 35200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359248' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8ad9cd43-fca0-11ed-0a80-0f800029730b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 8,
    reserve: 0,
    inTransit: 0,
    quantity: 8,
    barcode: '4680038359248'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/95845bb5-fc9f-11ed-0a80-110f002938eb',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=95844f11-fc9f-11ed-0a80-110f002938e9'
    },
    id: '95845bb5-fc9f-11ed-0a80-110f002938eb',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:16:29.827',
    name: 'Сыворотка для лица Супер увлажняющая 30мл',
    syncId: '45bd72fc-c8bd-41f2-88cd-e8866c1c945f',
    code: '00040',
    externalCode: 'O5UM109wg7d2jRQdSUacg0',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/95845bb5-fc9f-11ed-0a80-110f002938eb/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 49800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 35200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359262' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/95845bb5-fc9f-11ed-0a80-110f002938eb/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 8,
    reserve: 0,
    inTransit: 0,
    quantity: 8,
    barcode: '4680038359262'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9f1a1a9e-fca0-11ed-0a80-0c2300296b7b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9f1a0801-fca0-11ed-0a80-0c2300296b79'
    },
    id: '9f1a1a9e-fca0-11ed-0a80-0c2300296b7b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:16:42.305',
    name: 'Сыворотка для лица "Энергетическая" 30мл',
    syncId: '3b0e193d-cd94-469c-8c3f-5eb677bb43ce',
    code: '00048',
    externalCode: 't9-TA9KFgDZpw4aVBCc4p0',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9f1a1a9e-fca0-11ed-0a80-0c2300296b7b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 49800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 35200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359255' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9f1a1a9e-fca0-11ed-0a80-0c2300296b7b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 8,
    reserve: 0,
    inTransit: 0,
    quantity: 8,
    barcode: '4680038359255'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b15dd41b-fc9f-11ed-0a80-095100290428',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=b15dc6f3-fc9f-11ed-0a80-095100290426'
    },
    id: 'b15dd41b-fc9f-11ed-0a80-095100290428',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:13:47.059',
    name: 'Легкий крем-флюид "Тонизирующий" 50мл',
    syncId: 'c32e7faf-80fe-4a4a-9aed-8d8d1587695f',
    code: '00041',
    externalCode: 'fDPwyxbXg10v66--lYI-j3',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b15dd41b-fc9f-11ed-0a80-095100290428/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 59500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 42500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359217' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b15dd41b-fc9f-11ed-0a80-095100290428/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4680038359217'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bbabe6dc-fca0-11ed-0a80-0c2300297007',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=bbabda3d-fca0-11ed-0a80-0c2300297005'
    },
    id: 'bbabe6dc-fca0-11ed-0a80-0c2300297007',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:15:47.074',
    name: 'Пилинг-пудра для лица "Обновляющая" 35мл',
    syncId: '2df30d10-75b1-4836-82b5-6b5f05fde334',
    code: '00049',
    externalCode: 'y-diGJDqiYrqrpkdXhoKH2',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bbabe6dc-fca0-11ed-0a80-0c2300297007/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 61000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 43200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359330' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bbabe6dc-fca0-11ed-0a80-0c2300297007/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 9,
    reserve: 0,
    inTransit: 0,
    quantity: 9,
    barcode: '4680038359330'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cb3fa61d-fc9f-11ed-0a80-110f00294245',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=cb3f9754-fc9f-11ed-0a80-110f00294243'
    },
    id: 'cb3fa61d-fc9f-11ed-0a80-110f00294245',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:14:03.668',
    name: 'Маска для сияния лица Витаминное обновление" 100мл',
    syncId: 'b6d5dcb1-d05f-49ad-a74b-dd9de13b194c',
    code: '00042',
    externalCode: 'ZnBu2ffzgRM6pHyuy2cLp1',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cb3fa61d-fc9f-11ed-0a80-110f00294245/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 49800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 35200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359583' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cb3fa61d-fc9f-11ed-0a80-110f00294245/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 10,
    reserve: 0,
    inTransit: 0,
    quantity: 10,
    barcode: '4680038359583'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d36529f1-fca0-11ed-0a80-0951002934ec',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=d36513a1-fca0-11ed-0a80-0951002934ea'
    },
    id: 'd36529f1-fca0-11ed-0a80-0951002934ec',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:15:11.814',
    name: 'Очищающий гель для умывания 150мл',
    syncId: '76bb8351-302e-47a9-9df1-e8c1a04c8be3',
    code: '00050',
    externalCode: 'nTunVwFSj61p-yjHXtqTV0',
    archived: false,
    pathName: 3,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/54be0626-fca1-11ed-0a80-01e5001e14bb',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=54be0626-fca1-11ed-0a80-01e5001e14bb'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d36529f1-fca0-11ed-0a80-0951002934ec/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 45800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 32300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4680038359286' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d36529f1-fca0-11ed-0a80-0951002934ec/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 10,
    reserve: 0,
    inTransit: 0,
    quantity: 10,
    barcode: '4680038359286'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/048b06bc-fc86-11ed-0a80-0c230024a188',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=048af8ad-fc86-11ed-0a80-0c230024a186'
    },
    id: '048b06bc-fc86-11ed-0a80-0c230024a188',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:18:20.594',
    name: 'Пена для ванн "Кедровое СПА" 550мл',
    syncId: 'f55a6e1a-6f93-460b-a279-d9bcf962a009',
    code: '00026',
    externalCode: 'esDwyeAyikuS9myqNxd9O3',
    archived: false,
    pathName: 19,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/27418231-fcae-11ed-0a80-0333001f2f2b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=27418231-fcae-11ed-0a80-0333001f2f2b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/048b06bc-fc86-11ed-0a80-0c230024a188/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174430785' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/048b06bc-fc86-11ed-0a80-0c230024a188/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4607174430785'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11c672fe-fcad-11ed-0a80-0f80002b7105',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=11c6640c-fcad-11ed-0a80-0f80002b7103'
    },
    id: '11c672fe-fcad-11ed-0a80-0f80002b7105',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:17:37.006',
    name: 'Льняное молочко для тела, 250 мл',
    syncId: 'd3b41235-9efc-406d-a17d-c71bcc8fcb82',
    code: '00096',
    externalCode: 'dtPMxDbwhxwg9L9UGNO6X3',
    archived: false,
    pathName: 19,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/27418231-fcae-11ed-0a80-0333001f2f2b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=27418231-fcae-11ed-0a80-0333001f2f2b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11c672fe-fcad-11ed-0a80-0f80002b7105/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 71000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 49500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174432185' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11c672fe-fcad-11ed-0a80-0f80002b7105/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4607174432185'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/617939a2-fcad-11ed-0a80-0f80002b7d26',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=61792ada-fcad-11ed-0a80-0f80002b7d24'
    },
    id: '617939a2-fcad-11ed-0a80-0f80002b7d26',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:17:51.298',
    name: 'Льняное мыло для волос и тела, 250 мл',
    syncId: 'bbf5fc63-fb65-4a96-8202-f451006b58f8',
    code: '00097',
    externalCode: 'MWX-EROmiFgOgLNjP1Acu2',
    archived: false,
    pathName: 19,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/27418231-fcae-11ed-0a80-0333001f2f2b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=27418231-fcae-11ed-0a80-0333001f2f2b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/617939a2-fcad-11ed-0a80-0f80002b7d26/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 58900,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 41600,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174432178' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/617939a2-fcad-11ed-0a80-0f80002b7d26/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4607174432178'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/776f209e-fcad-11ed-0a80-0c23002b7918',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=776f16e6-fcad-11ed-0a80-0c23002b7916'
    },
    id: '776f209e-fcad-11ed-0a80-0c23002b7918',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:18:06.865',
    name: 'Пена для ванн "Амарантовая" 500мл',
    syncId: '93b40186-7b87-4b43-9aa7-e3e06a54447a',
    code: '00098',
    externalCode: 'VRLq5PadiUWucV-pZofG13',
    archived: false,
    pathName: 19,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/27418231-fcae-11ed-0a80-0333001f2f2b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=27418231-fcae-11ed-0a80-0333001f2f2b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/776f209e-fcad-11ed-0a80-0c23002b7918/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 82900,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 59000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174431898' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/776f209e-fcad-11ed-0a80-0c23002b7918/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4607174431898'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eb8ffc5c-fcac-11ed-0a80-0f80002b6ac1',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=eb8fee7a-fcac-11ed-0a80-0f80002b6abf'
    },
    id: 'eb8ffc5c-fcac-11ed-0a80-0f80002b6ac1',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:18:35.144',
    name: 'Пена для ванн "Царская" 500мл',
    syncId: '4434e59b-fdaa-4b5b-8b7e-fd744c85167e',
    code: '00095',
    externalCode: 'OyUAziVJg-1Np2ASbFjnG1',
    archived: false,
    pathName: 19,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/27418231-fcae-11ed-0a80-0333001f2f2b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=27418231-fcae-11ed-0a80-0333001f2f2b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eb8ffc5c-fcac-11ed-0a80-0f80002b6ac1/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 79500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 54100,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174431881' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eb8ffc5c-fcac-11ed-0a80-0f80002b6ac1/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4607174431881'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a622aa34-fca5-11ed-0a80-0c23002a4548',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a6229ce4-fca5-11ed-0a80-0c23002a4546'
    },
    id: 'a622aa34-fca5-11ed-0a80-0c23002a4548',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:34:16.799',
    name: 'Ледяная маска для лица -50',
    syncId: '6c82c1ad-5f21-42ef-b09b-a8e79151a561',
    code: '00063',
    externalCode: '9acj3C2ehA3RjpECHOHK42',
    archived: false,
    pathName: 22,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5bb93090-fca5-11ed-0a80-0795001d9b0f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5bb93090-fca5-11ed-0a80-0795001d9b0f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a622aa34-fca5-11ed-0a80-0c23002a4548/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 58000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 36400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079566068' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a622aa34-fca5-11ed-0a80-0c23002a4548/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 3,
    reserve: 0,
    inTransit: 0,
    quantity: 3,
    barcode: '4630079566068'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0ab1ac60-fca9-11ed-0a80-000f002aa2ee',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=0ab19df8-fca9-11ed-0a80-000f002aa2ec'
    },
    id: '0ab1ac60-fca9-11ed-0a80-000f002aa2ee',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:19:25.848',
    name: 'Питательный крем-суфле для тела, 170 мл Арджунская баня',
    syncId: '172990bd-169f-4550-b273-4c8b08d01591',
    code: '00079',
    externalCode: '62HDsHCij2kDTGBNHt7K02',
    archived: false,
    pathName: 26,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8d77a0db-fca8-11ed-0a80-0db0001d42a3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8d77a0db-fca8-11ed-0a80-0db0001d42a3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0ab1ac60-fca9-11ed-0a80-000f002aa2ee/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565993' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0ab1ac60-fca9-11ed-0a80-000f002aa2ee/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565993'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab5ac325-fca8-11ed-0a80-0951002a7862',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ab5ab589-fca8-11ed-0a80-0951002a7860'
    },
    id: 'ab5ac325-fca8-11ed-0a80-0951002a7862',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:19:49.614',
    name: 'Ягодная маска-смузи для тела, 170 мл Арджунская баня',
    syncId: '29ac3af0-7d86-497d-a99d-f3178009b69a',
    code: '00076',
    externalCode: 'UM-0Q3uRjAbwwAszR2zBa0',
    archived: false,
    pathName: 26,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8d77a0db-fca8-11ed-0a80-0db0001d42a3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8d77a0db-fca8-11ed-0a80-0db0001d42a3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab5ac325-fca8-11ed-0a80-0951002a7862/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 39000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565962' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab5ac325-fca8-11ed-0a80-0951002a7862/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 24,
    reserve: 0,
    inTransit: 0,
    quantity: 24,
    barcode: '4630079565962'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cc2775b8-fca8-11ed-0a80-0c23002ac85d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=cc27699c-fca8-11ed-0a80-0c23002ac85b'
    },
    id: 'cc2775b8-fca8-11ed-0a80-0c23002ac85d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:19:10.073',
    name: 'Нежное гель-мыло для тела, 170 мл Арджунская баня',
    syncId: '9a5e37c4-116b-45eb-8768-f4720f1a4e40',
    code: '00077',
    externalCode: 'P49SOCeLgGYJ1C3gDQaKl2',
    archived: false,
    pathName: 26,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8d77a0db-fca8-11ed-0a80-0db0001d42a3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8d77a0db-fca8-11ed-0a80-0db0001d42a3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cc2775b8-fca8-11ed-0a80-0c23002ac85d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 39000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565986' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cc2775b8-fca8-11ed-0a80-0c23002ac85d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565986'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ec16bca4-fca8-11ed-0a80-000f002a9e46',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ec16abb8-fca8-11ed-0a80-000f002a9e44'
    },
    id: 'ec16bca4-fca8-11ed-0a80-000f002a9e46',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:18:55.225',
    name: 'Кедровый скраб-массаж для тела, 130г Арджунская баня',
    syncId: '617ab2fc-cb5e-451f-9e6d-d50d16b1deb1',
    code: '00078',
    externalCode: 'Jz2Ag2NCjj62q4JCqJgFd1',
    archived: false,
    pathName: 26,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8d77a0db-fca8-11ed-0a80-0db0001d42a3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8d77a0db-fca8-11ed-0a80-0db0001d42a3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ec16bca4-fca8-11ed-0a80-000f002a9e46/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 41100,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079566624' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ec16bca4-fca8-11ed-0a80-000f002a9e46/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079566624'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5697d492-fcaa-11ed-0a80-0c23002b02c5',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=5697cbdb-fcaa-11ed-0a80-0c23002b02c3'
    },
    id: '5697d492-fcaa-11ed-0a80-0c23002b02c5',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:20:46.472',
    name: 'Питательная скраб-маска для тела 170мл Лосиное молоко',
    syncId: '327a8c4b-d11b-4ef0-816d-2ac4b6624969',
    code: '00087',
    externalCode: 'M8QKkiOhiQrgpzGFOlOMV0',
    archived: false,
    pathName: 29,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f5d9cd03-fca5-11ed-0a80-0282001df80c',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f5d9cd03-fca5-11ed-0a80-0282001df80c'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5697d492-fcaa-11ed-0a80-0c23002b02c5/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565511' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5697d492-fcaa-11ed-0a80-0c23002b02c5/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565511'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8492564e-fca9-11ed-0a80-0f80002aec3b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=84924512-fca9-11ed-0a80-0f80002aec39'
    },
    id: '8492564e-fca9-11ed-0a80-0f80002aec3b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 13:58:55.946',
    name: 'Молочная ванна "Антистресс", 160 г Лосиное молоко',
    syncId: '0e3f4655-32ac-463a-9d5c-4d6488025ab3',
    code: '00080',
    externalCode: 'tS5QK8ZXhJkPUS03GpvvW1',
    archived: false,
    pathName: 29,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f5d9cd03-fca5-11ed-0a80-0282001df80c',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f5d9cd03-fca5-11ed-0a80-0282001df80c'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8492564e-fca9-11ed-0a80-0f80002aec3b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565764' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 160,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8492564e-fca9-11ed-0a80-0f80002aec3b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 24,
    reserve: 0,
    inTransit: 0,
    quantity: 24,
    barcode: '4630079565764'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a26a8d02-fca9-11ed-0a80-0c23002ae86e',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a26a7f68-fca9-11ed-0a80-0c23002ae86c'
    },
    id: 'a26a8d02-fca9-11ed-0a80-0c23002ae86e',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:20:30.898',
    name: 'Густое крем-масло для тела, 170 мл Лосиное молоко',
    syncId: 'e013a9e9-dbd4-4582-ac62-1b3bcc1ecec4',
    code: '00081',
    externalCode: 'SaYPhNjwjRXMxZXJolxzQ0',
    archived: false,
    pathName: 29,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f5d9cd03-fca5-11ed-0a80-0282001df80c',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f5d9cd03-fca5-11ed-0a80-0282001df80c'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a26a8d02-fca9-11ed-0a80-0c23002ae86e/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565535' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a26a8d02-fca9-11ed-0a80-0c23002ae86e/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565535'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e30c0544-fca5-11ed-0a80-0c23002a4f72',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e30bfa5a-fca5-11ed-0a80-0c23002a4f70'
    },
    id: 'e30c0544-fca5-11ed-0a80-0c23002a4f72',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:20:54.739',
    name: 'Сухой тонизирующий скраб для лица , 70 г Лосиное молоко',
    syncId: '7bf49270-9686-491f-9fdc-d115866867aa',
    code: '00064',
    externalCode: 'UXqY9cQ6imMqUHHIrNlwy0',
    archived: false,
    pathName: 29,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f5d9cd03-fca5-11ed-0a80-0282001df80c',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f5d9cd03-fca5-11ed-0a80-0282001df80c'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e30c0544-fca5-11ed-0a80-0c23002a4f72/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565863' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e30c0544-fca5-11ed-0a80-0c23002a4f72/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565863'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3b53edfe-fcaa-11ed-0a80-110f002afe43',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3b53e520-fcaa-11ed-0a80-110f002afe41'
    },
    id: '3b53edfe-fcaa-11ed-0a80-110f002afe43',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:21:32.463',
    name: 'Хвойно-медовый скраб-массаж для тела, 190 г Таежный янтарь',
    syncId: '73403750-8eb0-4271-9af1-351ca11be76e',
    code: '00086',
    externalCode: 'ULnhaoCSiDNA0Tf8ZDl0w0',
    archived: false,
    pathName: 33,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/72bc4e61-fca6-11ed-0a80-0db0001d2d98',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=72bc4e61-fca6-11ed-0a80-0db0001d2d98'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3b53edfe-fcaa-11ed-0a80-110f002afe43/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565542' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3b53edfe-fcaa-11ed-0a80-110f002afe43/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565542'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/42581385-fca6-11ed-0a80-000f002a3129',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=42580386-fca6-11ed-0a80-000f002a3127'
    },
    id: '42581385-fca6-11ed-0a80-000f002a3129',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:21:03.778',
    name: 'Медовый скраб-пилинг для лица, 75 мл Таежный янтарь',
    syncId: 'de7f320b-3e8a-4686-90b2-d0ae801af0e6',
    code: '00065',
    externalCode: 'd2WAuXs-iN0F0xzPIb4Qj3',
    archived: false,
    pathName: 33,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/72bc4e61-fca6-11ed-0a80-0db0001d2d98',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=72bc4e61-fca6-11ed-0a80-0db0001d2d98'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/42581385-fca6-11ed-0a80-000f002a3129/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565559' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/42581385-fca6-11ed-0a80-000f002a3129/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565559'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f2bca568-fca9-11ed-0a80-000f002ac3cf',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f2bc9766-fca9-11ed-0a80-000f002ac3cd'
    },
    id: 'f2bca568-fca9-11ed-0a80-000f002ac3cf',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:21:39.946',
    name: 'Питательные крем-сливки для тела, 170 мл Таежный янтарь',
    syncId: 'bee23783-d555-48dd-8d62-a66acdc630dc',
    code: '00083',
    externalCode: 'OIxr4sGJhbl51OJcQ97330',
    archived: false,
    pathName: 33,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/72bc4e61-fca6-11ed-0a80-0db0001d2d98',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=72bc4e61-fca6-11ed-0a80-0db0001d2d98'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f2bca568-fca9-11ed-0a80-000f002ac3cf/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 44000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565566' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f2bca568-fca9-11ed-0a80-000f002ac3cf/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565566'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/46e2f69e-fca8-11ed-0a80-0951002a69b2',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=46e2e874-fca8-11ed-0a80-0951002a69b0'
    },
    id: '46e2f69e-fca8-11ed-0a80-0951002a69b2',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:21:49.014',
    name: 'Соль для ванн "Березовая купель", 170 г Улугская баня',
    syncId: '0c5e983b-4ecb-433b-8696-6adba50ce94d',
    code: '00074',
    externalCode: 'StOEeRVwjmYMqsvuNcQM63',
    archived: false,
    pathName: 35,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f2b7e02a-fca7-11ed-0a80-0282001e0ce8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f2b7e02a-fca7-11ed-0a80-0282001e0ce8'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/46e2f69e-fca8-11ed-0a80-0951002a69b2/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565931' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/46e2f69e-fca8-11ed-0a80-0951002a69b2/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565931'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/72ccaf89-fca8-11ed-0a80-0c23002abb21',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=72cca238-fca8-11ed-0a80-0c23002abb1f'
    },
    id: '72ccaf89-fca8-11ed-0a80-0c23002abb21',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:22:10.496',
    name: 'Ягодная маска-смузи для тела, 170 мл Улугская баня',
    syncId: '3aae3101-2492-4970-9d55-1f39355471f2',
    code: '00075',
    externalCode: 'PjJjeRU5iRMLkW5Ht80281',
    archived: false,
    pathName: 35,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f2b7e02a-fca7-11ed-0a80-0282001e0ce8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f2b7e02a-fca7-11ed-0a80-0282001e0ce8'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/72ccaf89-fca8-11ed-0a80-0c23002abb21/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 45000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 28700,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565955' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/72ccaf89-fca8-11ed-0a80-0c23002abb21/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565955'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e492ae22-fca7-11ed-0a80-110f002a9dd3',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e492a5ac-fca7-11ed-0a80-110f002a9dd1'
    },
    id: 'e492ae22-fca7-11ed-0a80-110f002a9dd3',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:21:57.922',
    name: 'Сухой скраб для тела, 170 г Улугская баня',
    syncId: '834d5d20-ef4f-4ab6-b0dd-ae08912abb6e',
    code: '00073',
    externalCode: '0W9EqqsLifNgG5S7B0aB40',
    archived: false,
    pathName: 35,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f2b7e02a-fca7-11ed-0a80-0282001e0ce8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f2b7e02a-fca7-11ed-0a80-0282001e0ce8'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e492ae22-fca7-11ed-0a80-110f002a9dd3/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565948' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e492ae22-fca7-11ed-0a80-110f002a9dd3/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565948'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0b20784b-fcaa-11ed-0a80-000f002ac82e',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=0b20636e-fcaa-11ed-0a80-000f002ac82c'
    },
    id: '0b20784b-fcaa-11ed-0a80-000f002ac82e',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:22:20.096',
    name: 'Пихтовая соль для ванны "Антистресс", 165 г Шаманка',
    syncId: '91ac25ea-ea8c-4570-af2c-390e997eba41',
    code: '00084',
    externalCode: 'fbX6Ygz6iz61cOUgFfqtW3',
    archived: false,
    pathName: 38,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b8e51d5d-fca9-11ed-0a80-0838001db5ad',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b8e51d5d-fca9-11ed-0a80-0838001db5ad'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0b20784b-fcaa-11ed-0a80-000f002ac82e/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565757' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/0b20784b-fcaa-11ed-0a80-000f002ac82e/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565757'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23597729-fcaa-11ed-0a80-0951002ab0eb',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=23596a02-fcaa-11ed-0a80-0951002ab0e9'
    },
    id: '23597729-fcaa-11ed-0a80-0951002ab0eb',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:22:38.059',
    name: '/ Сухой обновляющий скраб для тела, 170 г Шаманка',
    syncId: '5a387ed7-46a1-40bf-b3ff-55856c4fc80f',
    code: '00085',
    externalCode: 'MJDa-kodgfVpr6vH1Z9ty2',
    archived: false,
    pathName: 38,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b8e51d5d-fca9-11ed-0a80-0838001db5ad',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b8e51d5d-fca9-11ed-0a80-0838001db5ad'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23597729-fcaa-11ed-0a80-0951002ab0eb/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 26000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565504' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23597729-fcaa-11ed-0a80-0951002ab0eb/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630079565504'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ceea8e86-fca9-11ed-0a80-0c23002aee9f',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ceea8056-fca9-11ed-0a80-0c23002aee9d'
    },
    id: 'ceea8e86-fca9-11ed-0a80-0c23002aee9f',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:22:29.524',
    name: 'Сливочный крем-баттер для тела, 170 мл Шаманка',
    syncId: '4b302b13-a99a-45dd-aaf5-8be5492246cf',
    code: '00082',
    externalCode: 'ieaCbZ2yjU3ayUYpd4QrF0',
    archived: false,
    pathName: 38,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b8e51d5d-fca9-11ed-0a80-0838001db5ad',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b8e51d5d-fca9-11ed-0a80-0838001db5ad'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ceea8e86-fca9-11ed-0a80-0c23002aee9f/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 45000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000077' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ceea8e86-fca9-11ed-0a80-0c23002aee9f/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '2000000000077'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3ae69480-fcac-11ed-0a80-110f002b4a32',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3ae6881e-fcac-11ed-0a80-110f002b4a30'
    },
    id: '3ae69480-fcac-11ed-0a80-110f002b4a32',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:22:55.608',
    name: 'Бальзам для волос 30мл. / Interior Collection',
    syncId: 'cf92cde1-0f72-4383-8136-2883a2dc866d',
    code: '00093',
    externalCode: '7Y9VHxY8iFEEyrcWIv8p-3',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3ae69480-fcac-11ed-0a80-110f002b4a32/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 7400,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 3200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101391' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3ae69480-fcac-11ed-0a80-110f002b4a32/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 216,
    reserve: 0,
    inTransit: 0,
    quantity: 216,
    barcode: '4630121101391'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3f63ed4e-fcab-11ed-0a80-000f002af811',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3f63dd01-fcab-11ed-0a80-000f002af80f'
    },
    id: '3f63ed4e-fcab-11ed-0a80-000f002af811',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 12:35:41.539',
    name: 'Лосьон для рук /Interior Collection, 300мл',
    syncId: 'ba27d09b-b2e1-49ea-98da-c26d67b7c115',
    code: '00088',
    externalCode: 'g4PTCkjmhrqC12XtSaw3d3',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3f63ed4e-fcab-11ed-0a80-000f002af811/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 78000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100936' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3f63ed4e-fcab-11ed-0a80-000f002af811/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121100936'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/50f8d9b3-fcab-11ed-0a80-000f002afa6f',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=50f8ccb9-fcab-11ed-0a80-000f002afa6d'
    },
    id: '50f8d9b3-fcab-11ed-0a80-000f002afa6f',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 12:35:53.251',
    name: 'Мыло для рук /Interior Collection, 500мл',
    syncId: '9fae3498-29b3-4fef-ace2-d236a705fdc2',
    code: '00089',
    externalCode: 'KmKK1-WxiVwDAon0bG7Zq2',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/50f8d9b3-fcab-11ed-0a80-000f002afa6f/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 123000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 40400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100639' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/50f8d9b3-fcab-11ed-0a80-000f002afa6f/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121100639'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/53593766-fc86-11ed-0a80-110f00249e4f',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=53592a12-fc86-11ed-0a80-110f00249e4d'
    },
    id: '53593766-fc86-11ed-0a80-110f00249e4f',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:23:49.578',
    name: 'Мыло туалетное твердое в пленке /Interior Collection, 18г',
    syncId: '08312ae2-bd28-4920-a29f-13c9ef1b3d28',
    code: '00028',
    externalCode: 'fvnAgm9AjreNpV2vdv-SR1',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/53593766-fc86-11ed-0a80-110f00249e4f/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 4200,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 1850,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121102589' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/53593766-fc86-11ed-0a80-110f00249e4f/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 500,
    reserve: 0,
    inTransit: 0,
    quantity: 500,
    barcode: '4630121102589'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/63b0f762-fcab-11ed-0a80-110f002b2ba2',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=63b0e8b3-fcab-11ed-0a80-110f002b2ba0'
    },
    id: '63b0f762-fcab-11ed-0a80-110f002b2ba2',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 12:35:29.647',
    name: 'Гель для душа /Interior Collection, 300мл',
    syncId: '1ab28553-c969-43e7-92b5-380683037b2b',
    code: '00090',
    externalCode: 'VxlnL6HKhmdKSyGlLkUhm0',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/63b0f762-fcab-11ed-0a80-110f002b2ba2/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 78000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100554' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/63b0f762-fcab-11ed-0a80-110f002b2ba2/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121100554'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7c8fd6c6-fcab-11ed-0a80-0f80002b3666',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=7c8fcbee-fcab-11ed-0a80-0f80002b3664'
    },
    id: '7c8fd6c6-fcab-11ed-0a80-0f80002b3666',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 12:36:02.977',
    name: 'Парфюмированный спрей-санитайзер для помещений/Interior Collection, 500мл',
    syncId: 'ee14f4de-f4a9-4a3f-b946-8a7e653c79d9',
    code: '00091',
    externalCode: 'wuDEDkKxiZs9qyyVhkrAN3',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7c8fd6c6-fcab-11ed-0a80-0f80002b3666/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 78000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079564286' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/7c8fd6c6-fcab-11ed-0a80-0f80002b3666/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630079564286'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/93317180-fcab-11ed-0a80-110f002b32db',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=933169c2-fcab-11ed-0a80-110f002b32d9'
    },
    id: '93317180-fcab-11ed-0a80-110f002b32db',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 12:36:12.428',
    name: 'Шампунь для волос /Interior Collection, 300мл',
    syncId: '3edf1c81-50ba-48d6-9a29-d58c05cebb29',
    code: '00092',
    externalCode: '5fcUdndBg9PCDs1rpZc-E2',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/93317180-fcab-11ed-0a80-110f002b32db/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 78000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100905' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/93317180-fcab-11ed-0a80-110f002b32db/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121100905'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c0e38762-fcac-11ed-0a80-0951002b13fc',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c0e37a8f-fcac-11ed-0a80-0951002b13fa'
    },
    id: 'c0e38762-fcac-11ed-0a80-0951002b13fc',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:23:40.306',
    name: 'Мыло туалетное твердое в картонной коробочке /Interior Collection, 42г',
    syncId: 'a59aefac-fb5a-41af-bde1-ec62d02426a9',
    code: '00094',
    externalCode: 'feeQm3Jjjky0EuCMIVgcb1',
    archived: false,
    pathName: 41,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e025e135-fcaa-11ed-0a80-01e5001e9ca7',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=e025e135-fcaa-11ed-0a80-01e5001e9ca7'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c0e38762-fcac-11ed-0a80-0951002b13fc/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 9300,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 4650,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121102596' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c0e38762-fcac-11ed-0a80-0951002b13fc/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 200,
    reserve: 0,
    inTransit: 0,
    quantity: 200,
    barcode: '4630121102596'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1aa57b8b-fc82-11ed-0a80-110f0023cad9',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=1aa56b8c-fc82-11ed-0a80-110f0023cad7'
    },
    id: '1aa57b8b-fc82-11ed-0a80-110f0023cad9',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:24:55.244',
    name: 'Крем для рук "Mystic Sardaana" 300 мл.',
    syncId: '8b23d21b-677a-4bb1-9f21-3c45996abab8',
    code: '00008',
    externalCode: 'Ue-I0iTvjvxhLJwJ8zuR03',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1aa57b8b-fc82-11ed-0a80-110f0023cad9/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 110000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 76400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101506' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1aa57b8b-fc82-11ed-0a80-110f0023cad9/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121101506'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/59a228c4-fc81-11ed-0a80-09510023749a',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=59a20d11-fc81-11ed-0a80-095100237498'
    },
    id: '59a228c4-fc81-11ed-0a80-09510023749a',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:25:44.732',
    name: 'Сухая ванна-элексир "Mystic Sardaana"',
    syncId: 'a1a9a67c-45e4-4954-acb1-56064508664f',
    code: '00005',
    externalCode: 'fU0Uyk91jDZrsGCTVfo0Z2',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/59a228c4-fc81-11ed-0a80-09510023749a/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 138000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 97250,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121102015' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/59a228c4-fc81-11ed-0a80-09510023749a/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121102015'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/712dbdf4-fc7a-11ed-0a80-110f00224f24',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=712db2da-fc7a-11ed-0a80-110f00224f22'
    },
    id: '712dbdf4-fc7a-11ed-0a80-110f00224f24',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:25:31.157',
    name: 'Соль для ванн "Mystic Sardaana"',
    syncId: '2013f095-b987-4d3c-bd3e-d1c2391063da',
    code: '00003',
    externalCode: 'SJwd8GMGi-Bw4Fma2FqCN2',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/712dbdf4-fc7a-11ed-0a80-110f00224f24/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 125000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 83400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101803' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/712dbdf4-fc7a-11ed-0a80-110f00224f24/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121101803'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b329ac06-fc81-11ed-0a80-0f800023c607',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=b329a002-fc81-11ed-0a80-0f800023c605'
    },
    id: 'b329ac06-fc81-11ed-0a80-0f800023c607',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:24:42.388',
    name: 'Гель для душа "Mystic Sardaana" 300мл.',
    syncId: '0db84031-ea6b-4657-8c36-d3f6a93914f1',
    code: '00006',
    externalCode: 'FjEMZZcMge1fciJm0ts9D3',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b329ac06-fc81-11ed-0a80-0f800023c607/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 130000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 90250,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101780' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b329ac06-fc81-11ed-0a80-0f800023c607/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121101780'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d803bc5c-fc81-11ed-0a80-095100238e98',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=d803b220-fc81-11ed-0a80-095100238e96'
    },
    id: 'd803bc5c-fc81-11ed-0a80-095100238e98',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:25:07.838',
    name: 'Лосьен для тела "Mystic Sardaana" 300 мл.',
    syncId: 'e3ffb2ee-84a6-4632-a2f8-1f310d9b38f0',
    code: '00007',
    externalCode: 'c1oyQQeijmsOppe4s7Gwh1',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d803bc5c-fc81-11ed-0a80-095100238e98/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 130000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 90250,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101742' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d803bc5c-fc81-11ed-0a80-095100238e98/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121101742'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f28623b5-fc7f-11ed-0a80-0f800023724c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f2860f17-fc7f-11ed-0a80-0f800023724a'
    },
    id: 'f28623b5-fc7f-11ed-0a80-0f800023724c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:25:18.020',
    name: 'Солевой скраб "Mystic Sardaana"',
    syncId: 'ee716f49-34b1-4136-a067-090a38923d28',
    code: '00004',
    externalCode: 'txTIkJ8TiGMcdurCX8EgW1',
    archived: false,
    pathName: 50,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/5fd9d631-fc96-11ed-0a80-0838001c98ec',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=5fd9d631-fc96-11ed-0a80-0838001c98ec'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f28623b5-fc7f-11ed-0a80-0f800023724c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 130000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 90250,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101872' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f28623b5-fc7f-11ed-0a80-0f800023724c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630121101872'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/88559693-fc82-11ed-0a80-0c230023f3a6',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=88558b5b-fc82-11ed-0a80-0c230023f3a4'
    },
    id: '88559693-fc82-11ed-0a80-0c230023f3a6',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:26:07.146',
    name: 'Облепихово-кедровый скраб для тела 300 мл.',
    syncId: 'ab91d6ff-07f5-4b80-97c1-5fbeed42668e',
    code: '00009',
    externalCode: 'EG2EsHHcgkOnzQwN2GYvz3',
    archived: false,
    pathName: 54,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/0ba31777-fc9e-11ed-0a80-1342001cb52b',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=0ba31777-fc9e-11ed-0a80-1342001cb52b'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/88559693-fc82-11ed-0a80-0c230023f3a6/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 62000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 40900,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121103371' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/88559693-fc82-11ed-0a80-0c230023f3a6/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 1,
    reserve: 0,
    inTransit: 0,
    quantity: 1,
    barcode: '4630121103371'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/119dfcf8-fcaf-11ed-0a80-0c23002bb74e',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=119df034-fcaf-11ed-0a80-0c23002bb74c'
    },
    id: '119dfcf8-fcaf-11ed-0a80-0c23002bb74e',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:28:13.951',
    name: 'Проф.СПА-программа для тела "Ретуал невесты"',
    syncId: '10bf10b3-c3a7-4c2d-bdda-1c165aa1c845',
    code: '00101',
    externalCode: 'K87h-2-fhV4x2QnvI0F9Z2',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/119dfcf8-fcaf-11ed-0a80-0c23002bb74e/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 81250,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 81250,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104262' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/119dfcf8-fcaf-11ed-0a80-0c23002bb74e/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104262'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14b8acbc-fcae-11ed-0a80-0c23002b9190',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=14b8a305-fcae-11ed-0a80-0c23002b918e'
    },
    id: '14b8acbc-fcae-11ed-0a80-0c23002b9190',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:27:47.126',
    name: 'Проф.СПА-программа для тела "Глубоководные северные водоросли"',
    syncId: '7aeee53e-cb8d-4bd7-a3c8-88350a15dca6',
    code: '00099',
    externalCode: '0shDTFhij-9jvqKojooqW2',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14b8acbc-fcae-11ed-0a80-0c23002b9190/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 375000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 375000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104248' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14b8acbc-fcae-11ed-0a80-0c23002b9190/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104248'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2118d767-fcaf-11ed-0a80-000f002b8ea7',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=2118c7b0-fcaf-11ed-0a80-000f002b8ea5'
    },
    id: '2118d767-fcaf-11ed-0a80-000f002b8ea7',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:27:55.316',
    name: 'Проф.СПА-программа для тела "Королевский релакс"',
    syncId: '74da5571-44db-4fc0-97d2-57a279df38e3',
    code: '00102',
    externalCode: 'NY92Jbbjj3dS7knMzLv6W2',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2118d767-fcaf-11ed-0a80-000f002b8ea7/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 75000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 75000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104279' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2118d767-fcaf-11ed-0a80-000f002b8ea7/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104279'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2de20845-fcaf-11ed-0a80-0f80002bc328',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=2de1faf5-fcaf-11ed-0a80-0f80002bc326'
    },
    id: '2de20845-fcaf-11ed-0a80-0f80002bc328',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:26:31.121',
    name: 'Проф.СПА-программа для лица "Клеточное обновление"',
    syncId: '9356c981-e31b-4db2-b3c3-c5d7430b710f',
    code: '00103',
    externalCode: 'JDMhyeC9gIb70lyRmcxiK1',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2de20845-fcaf-11ed-0a80-0f80002bc328/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 125000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 125000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104286' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2de20845-fcaf-11ed-0a80-0f80002bc328/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104286'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e130e79-fcaf-11ed-0a80-0f80002bc55d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3e12ff63-fcaf-11ed-0a80-0f80002bc55b'
    },
    id: '3e130e79-fcaf-11ed-0a80-0f80002bc55d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:26:44.171',
    name: 'Проф.СПА-программа для лица "Секреты океана"',
    syncId: 'e55ed285-16c3-47c3-8fc3-808f6192745a',
    code: '00104',
    externalCode: '8MJUlFUEhveCBcbJyv4yk3',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e130e79-fcaf-11ed-0a80-0f80002bc55d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 112500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 112500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104293' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e130e79-fcaf-11ed-0a80-0f80002bc55d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104293'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4ee91f9e-fcaf-11ed-0a80-0c23002bc151',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=4ee914f3-fcaf-11ed-0a80-0c23002bc14f'
    },
    id: '4ee91f9e-fcaf-11ed-0a80-0c23002bc151',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:26:55.780',
    name: 'Проф.СПА-программа для ног "Северная ягода"',
    syncId: '449532d5-358a-4565-8e4e-c33cc9b5f84d',
    code: '00105',
    externalCode: 'WjrNVGb-jfRf0EgTuV4Kz0',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4ee91f9e-fcaf-11ed-0a80-0c23002bc151/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 37500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 37500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104309' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4ee91f9e-fcaf-11ed-0a80-0c23002bc151/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104309'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5b631005-fcaf-11ed-0a80-0f80002bca50',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=5b6303fb-fcaf-11ed-0a80-0f80002bca4e'
    },
    id: '5b631005-fcaf-11ed-0a80-0f80002bca50',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:27:37.305',
    name: 'Проф.СПА-программа для рук "Порное Молоко"',
    syncId: '24501ac8-ec91-4142-a8f0-325c9dd0042c',
    code: '00106',
    externalCode: 'gWMl14Sqjpv0J3ft25udU1',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5b631005-fcaf-11ed-0a80-0f80002bca50/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 50000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 50000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104316' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5b631005-fcaf-11ed-0a80-0f80002bca50/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104316'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f62ec57b-fcae-11ed-0a80-0c23002bb308',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f62eb713-fcae-11ed-0a80-0c23002bb306'
    },
    id: 'f62ec57b-fcae-11ed-0a80-0c23002bb308',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:28:05.676',
    name: 'Проф.СПА-программа для тела "Мед и травы"',
    syncId: '2b3678b1-b297-4c08-af35-aae5043c3880',
    code: '00100',
    externalCode: 'R0FBWhYMhdrv1JM2044Ac3',
    archived: false,
    pathName: 62,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/b7b23f08-fcae-11ed-0a80-0282001e6e44',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=b7b23f08-fcae-11ed-0a80-0282001e6e44'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f62ec57b-fcae-11ed-0a80-0c23002bb308/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 75000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 75000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '104255' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f62ec57b-fcae-11ed-0a80-0c23002bb308/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '104255'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1f267a10-02de-11ee-0a80-050b00396a7b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=1f266e98-02de-11ee-0a80-050b00396a79'
    },
    id: '1f267a10-02de-11ee-0a80-050b00396a7b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:29:48.882',
    name: 'Скраб "Водорослево-солевой"',
    syncId: '893621f8-866c-4603-ba31-f2ef2c044442',
    code: '00147',
    externalCode: 'dxUYBZj0hxoGaUURwiV3j1',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1f267a10-02de-11ee-0a80-050b00396a7b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 99000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 69100,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100875' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1f267a10-02de-11ee-0a80-050b00396a7b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100875'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5bea9a84-fca3-11ed-0a80-110f0029dc53',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=5bea8ca3-fca3-11ed-0a80-110f0029dc51'
    },
    id: '5bea9a84-fca3-11ed-0a80-110f0029dc53',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:30:09.812',
    name: 'Снежный скраб для тела 350гр',
    syncId: '34ec0110-b38d-4430-850d-b2d4e29c71c3',
    code: '00054',
    externalCode: 'eNJ6wLjfigqqa7FkYDrTQ1',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5bea9a84-fca3-11ed-0a80-110f0029dc53/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 99000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 69100,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100875' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5bea9a84-fca3-11ed-0a80-110f0029dc53/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100875'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6ff43652-fca3-11ed-0a80-0f800029ee2c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=6ff42ca8-fca3-11ed-0a80-0f800029ee2a'
    },
    id: '6ff43652-fca3-11ed-0a80-0f800029ee2c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:29:56.540',
    name: 'Скраб-дренаж для тела "Вулканический" 480г',
    syncId: 'ca56c706-a896-47db-a8e0-6db8649c2c96',
    code: '00055',
    externalCode: 'qs9rjp58i6cBbcfT9jOrz0',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6ff43652-fca3-11ed-0a80-0f800029ee2c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 99000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 69100,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100899' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6ff43652-fca3-11ed-0a80-0f800029ee2c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100899'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9df76e3d-fca6-11ed-0a80-110f002a686b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9df76395-fca6-11ed-0a80-110f002a6869'
    },
    id: '9df76e3d-fca6-11ed-0a80-110f002a686b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:29:18.308',
    name: 'Ледяной крем-дренаж для тела 200мл',
    syncId: '6ecbefd2-cb53-4a7c-b0dc-927cc39bced0',
    code: '00066',
    externalCode: 'xsR8geovhZEh-EmHyNc1o0',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9df76e3d-fca6-11ed-0a80-110f002a686b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 87000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 60400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100462' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9df76e3d-fca6-11ed-0a80-110f002a686b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100462'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b49e9174-fca6-11ed-0a80-0f80002a7824',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=b49e849d-fca6-11ed-0a80-0f80002a7822'
    },
    id: 'b49e9174-fca6-11ed-0a80-0f80002a7824',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:29:32.802',
    name: 'Нежное льняное молочко для тела 200мл',
    syncId: 'c060f40b-e705-4e05-bb72-79e4307fcc41',
    code: '00067',
    externalCode: 'ikXdiRZshq9K3WFxreand0',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b49e9174-fca6-11ed-0a80-0f80002a7824/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 87000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 60400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100479' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b49e9174-fca6-11ed-0a80-0f80002a7824/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100479'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2f401c1-fca3-11ed-0a80-09510029ae28',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c2f3f44a-fca3-11ed-0a80-09510029ae26'
    },
    id: 'c2f401c1-fca3-11ed-0a80-09510029ae28',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:29:02.787',
    name: 'Густое масло для тела 370мл',
    syncId: '377a8aee-d66b-4560-80e8-6bc58ff2ad9d',
    code: '00056',
    externalCode: 'VVo-0omojJA5JpSKAFO043',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2f401c1-fca3-11ed-0a80-09510029ae28/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 135000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 89200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174430952' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2f401c1-fca3-11ed-0a80-09510029ae28/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4607174430952'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cd0c07cc-fca6-11ed-0a80-0f80002a7bdc',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=cd0bff37-fca6-11ed-0a80-0f80002a7bda'
    },
    id: 'cd0c07cc-fca6-11ed-0a80-0f80002a7bdc',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:30:25.370',
    name: 'Таежный расслабляющий гель для душа 200мл',
    syncId: 'deae8f68-21b0-487f-ba14-ecd36202fabc',
    code: '00068',
    externalCode: '82w80fqTj7FQZLiCr90KB1',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cd0c07cc-fca6-11ed-0a80-0f80002a7bdc/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 53000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 34600,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121100455' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cd0c07cc-fca6-11ed-0a80-0f80002a7bdc/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121100455'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e2099bfb-fc85-11ed-0a80-110f00248a11',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e20990ed-fc85-11ed-0a80-110f00248a0f'
    },
    id: 'e2099bfb-fc85-11ed-0a80-110f00248a11',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:28:36.452',
    name: 'Густое масло для ног 120мл',
    syncId: 'f7dd8be8-81f1-4eca-b683-f0a72fc76c55',
    code: '00025',
    externalCode: 'Iv5uWbIBgve42BIl0IXjB3',
    archived: false,
    pathName: 67,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/411a7b1a-fc97-11ed-0a80-1342001c5924',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=411a7b1a-fc97-11ed-0a80-1342001c5924'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e2099bfb-fc85-11ed-0a80-110f00248a11/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 67500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 47100,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174430969' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e2099bfb-fc85-11ed-0a80-110f00248a11/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4607174430969'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/67ce367f-fca4-11ed-0a80-0c23002a123d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=67ce2b8e-fca4-11ed-0a80-0c23002a123b'
    },
    id: '67ce367f-fca4-11ed-0a80-0c23002a123d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:30:40.068',
    name: 'Скраб для тела "Mint Sorbet тонизирующий" 400г',
    syncId: 'b2b0dca2-9bf8-4666-8ad2-18b892f116ec',
    code: '00057',
    externalCode: '-9tuSEUXjUb6y4aG-fav91',
    archived: false,
    pathName: 71,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/67ce367f-fca4-11ed-0a80-0c23002a123d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079567997' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/67ce367f-fca4-11ed-0a80-0c23002a123d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630079567997'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/81ab818d-fca4-11ed-0a80-0c23002a16b9',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=81ab7879-fca4-11ed-0a80-0c23002a16b7'
    },
    id: '81ab818d-fca4-11ed-0a80-0c23002a16b9',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:31:02.619',
    name: 'Соль для ванн "Frosted Cedar Расслабляющая" 400г',
    syncId: 'f8a016ce-bed1-4f85-aa96-72dd1fd6a7db',
    code: '00058',
    externalCode: 'lpfWfMlthdc8UrOLGLdtS2',
    archived: false,
    pathName: 71,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/81ab818d-fca4-11ed-0a80-0c23002a16b9/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 39000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 20700,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079567973' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/81ab818d-fca4-11ed-0a80-0c23002a16b9/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630079567973'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/976feb5f-fca4-11ed-0a80-110f002a1107',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=976fe0ec-fca4-11ed-0a80-110f002a1105'
    },
    id: '976feb5f-fca4-11ed-0a80-110f002a1107',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:30:54.142',
    name: 'Скраб для тела "Spicy Berry Разогревающий" 400г',
    syncId: '1c59970f-a0bb-4772-b2db-358621fb5390',
    code: '00059',
    externalCode: 'SgUL37GYjvqDSlc30n2-W3',
    archived: false,
    pathName: 71,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/976feb5f-fca4-11ed-0a80-110f002a1107/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079568017' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/976feb5f-fca4-11ed-0a80-110f002a1107/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630079568017'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab7a33ad-fca4-11ed-0a80-000f0029eb45',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ab7a1fb3-fca4-11ed-0a80-000f0029eb43'
    },
    id: 'ab7a33ad-fca4-11ed-0a80-000f0029eb45',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:30:47.151',
    name: 'Скраб для тела "Salty Honey Подтягивающий" 400г',
    syncId: '77fbf3fb-2763-49fc-9495-4b281436ad70',
    code: '00060',
    externalCode: 'uiICwNQ3g7ZLfTKkxqF5c1',
    archived: false,
    pathName: 71,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=37ab9b0b-fca4-11ed-0a80-0f7f001d9ba2'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab7a33ad-fca4-11ed-0a80-000f0029eb45/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 42000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 27300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079568000' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ab7a33ad-fca4-11ed-0a80-000f0029eb45/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630079568000'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/05096cd5-fcbc-11ed-0a80-0951002d15cb',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=05096189-fcbc-11ed-0a80-0951002d15c9'
    },
    id: '05096cd5-fcbc-11ed-0a80-0951002d15cb',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:34:51.022',
    name: '10 сенсов лимфодренажного массажа 60 минут',
    syncId: 'b6800609-7b7b-4cec-9348-df8e2f617ab8',
    code: '00143',
    externalCode: '3WG9-S2kiTayc3J7q4RQ43',
    archived: false,
    pathName: 77,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/21a71dbb-fcbc-11ed-0a80-0838001e558f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=21a71dbb-fcbc-11ed-0a80-0838001e558f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/05096cd5-fcbc-11ed-0a80-0951002d15cb/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 2100000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00027' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/05096cd5-fcbc-11ed-0a80-0951002d15cb/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00027'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11dddac3-fcbc-11ed-0a80-0c23002d63be',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=11ddd079-fcbc-11ed-0a80-0c23002d63bc'
    },
    id: '11dddac3-fcbc-11ed-0a80-0c23002d63be',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:34:46.692',
    name: '10 сенсов детского массажа 60 минут',
    syncId: '30e48f1b-a9b6-4675-b3d9-5dcfdd19930a',
    code: '00144',
    externalCode: 'TBTyIajliUrH07SBuWwhe1',
    archived: false,
    pathName: 77,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/21a71dbb-fcbc-11ed-0a80-0838001e558f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=21a71dbb-fcbc-11ed-0a80-0838001e558f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11dddac3-fcbc-11ed-0a80-0c23002d63be/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 2000000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00028' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/11dddac3-fcbc-11ed-0a80-0c23002d63be/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00028'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ea362507-fcbb-11ed-0a80-110f002d5b6d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ea361b1b-fcbb-11ed-0a80-110f002d5b6b'
    },
    id: 'ea362507-fcbb-11ed-0a80-110f002d5b6d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:34:42.508',
    name: '10 сеансов общего массажа тела 60 минут',
    syncId: 'e1e9bd96-98f3-477c-a8cc-62af6984c37c',
    code: '00141',
    externalCode: 'vZb8nv5NiuAsTdqRGGw7R1',
    archived: false,
    pathName: 77,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/21a71dbb-fcbc-11ed-0a80-0838001e558f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=21a71dbb-fcbc-11ed-0a80-0838001e558f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ea362507-fcbb-11ed-0a80-110f002d5b6d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1900000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00024' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ea362507-fcbb-11ed-0a80-110f002d5b6d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00024'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f54ec37d-fcbb-11ed-0a80-110f002d5c80',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f54eb351-fcbb-11ed-0a80-110f002d5c7e'
    },
    id: 'f54ec37d-fcbb-11ed-0a80-110f002d5c80',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:34:37.675',
    name: '10 сеансов интенсивного массажа тела 60 минут',
    syncId: '47d1d4e0-58e9-489f-a22b-35fb232d4298',
    code: '00142',
    externalCode: 'lHyhI4mUhTS9Lubpp5GM41',
    archived: false,
    pathName: 77,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/21a71dbb-fcbc-11ed-0a80-0838001e558f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=21a71dbb-fcbc-11ed-0a80-0838001e558f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f54ec37d-fcbb-11ed-0a80-110f002d5c80/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 2200000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00025' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f54ec37d-fcbb-11ed-0a80-110f002d5c80/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00025'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/10ebfff2-fc83-11ed-0a80-000f0023ed06',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=10ebedfd-fc83-11ed-0a80-000f0023ed04'
    },
    id: '10ebfff2-fc83-11ed-0a80-000f0023ed06',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:31:53.870',
    name: 'Детская пенка для купания "Ясно-солнышко"',
    syncId: 'b27a00b0-ff71-486a-8853-02c1f777e2d2',
    code: '00012',
    externalCode: 'mc4FUZ20j-Rw1Ljj7S3712',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/10ebfff2-fc83-11ed-0a80-000f0023ed06/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 54000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 29300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101933' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/10ebfff2-fc83-11ed-0a80-000f0023ed06/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121101933'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23a303e0-fc84-11ed-0a80-0f8000243e61',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=23a2f55f-fc84-11ed-0a80-0f8000243e5f'
    },
    id: '23a303e0-fc84-11ed-0a80-0f8000243e61',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:31:33.068',
    name: 'Детская зубная паста "Мятный холодок"',
    syncId: '33143513-0450-49d6-b318-9c268925bbcc',
    code: '00016',
    externalCode: '4kfu5LjZhe17Y4WU0Refz0',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23a303e0-fc84-11ed-0a80-0f8000243e61/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 22300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101919' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/23a303e0-fc84-11ed-0a80-0f8000243e61/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 20,
    reserve: 0,
    inTransit: 0,
    quantity: 20,
    barcode: '4630121101919'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e1c15b9-fc84-11ed-0a80-000f00242a4d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3e1c07c0-fc84-11ed-0a80-000f00242a4b'
    },
    id: '3e1c15b9-fc84-11ed-0a80-000f00242a4d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:31:25.587',
    name: 'Детская зубная паста "Лесная ягодка"',
    syncId: 'b203070b-712c-4fb7-bd39-a6799f0bf192',
    code: '00017',
    externalCode: 'EJINUH1FirRqXw7kffbtm0',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e1c15b9-fc84-11ed-0a80-000f00242a4d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 22300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101889' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3e1c15b9-fc84-11ed-0a80-000f00242a4d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 20,
    reserve: 0,
    inTransit: 0,
    quantity: 20,
    barcode: '4630121101889'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/af68e063-fc83-11ed-0a80-110f0024196d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=af68d369-fc83-11ed-0a80-110f0024196b'
    },
    id: 'af68e063-fc83-11ed-0a80-110f0024196d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:32:07.109',
    name: 'Детский защитный крем под подгузник "Мамина забота"',
    syncId: '79843a10-a00f-4521-b8a7-d92755e9d5d8',
    code: '00013',
    externalCode: '2SkdlagkgvBzhkU1qq-3-0',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/af68e063-fc83-11ed-0a80-110f0024196d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 53000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 34200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101988' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/af68e063-fc83-11ed-0a80-110f0024196d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630121101988'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c9171e44-fc82-11ed-0a80-0c2300240144',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c9171407-fc82-11ed-0a80-0c2300240142'
    },
    id: 'c9171e44-fc82-11ed-0a80-0c2300240144',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:32:31.339',
    name: 'Детское жидкое мыло "Ладушки-ладошки" 500 мл.',
    syncId: '93ed20ce-1390-415b-8b3c-3b566ae1b864',
    code: '00010',
    externalCode: 'e7OAiFS1iJXOIJTiKvyQs1',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c9171e44-fc82-11ed-0a80-0c2300240144/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 43000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 30600,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101865' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c9171e44-fc82-11ed-0a80-0c2300240144/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 12,
    reserve: 0,
    inTransit: 0,
    quantity: 12,
    barcode: '4630121101865'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e8df1cb7-fc82-11ed-0a80-09510023c15a',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e8df0d90-fc82-11ed-0a80-09510023c158'
    },
    id: 'e8df1cb7-fc82-11ed-0a80-09510023c15a',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:31:45.413',
    name: 'Детская пена для купания "Баюшки-баю"',
    syncId: '5b776e03-aa4f-45a7-afa0-e7ff41595615',
    code: '00011',
    externalCode: 'FyErWZKliJg14WBMQ6pnh0',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e8df1cb7-fc82-11ed-0a80-09510023c15a/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 43000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 20300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101926' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e8df1cb7-fc82-11ed-0a80-09510023c15a/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 16,
    reserve: 0,
    inTransit: 0,
    quantity: 16,
    barcode: '4630121101926'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fd8f0f1b-fc83-11ed-0a80-0c2300243d61',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=fd8f00b4-fc83-11ed-0a80-0c2300243d5f'
    },
    id: 'fd8f0f1b-fc83-11ed-0a80-0c2300243d61',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:32:17.518',
    name: 'Детский увлажняющий крем "Наливное яблочко"',
    syncId: '7a4d390d-6a2c-41d4-ac6f-f9a51d3d51dd',
    code: '00015',
    externalCode: 'reUA6OOVg6UcTts2Nz8xw3',
    archived: false,
    pathName: 79,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f0f92e31-fc87-11ed-0a80-0db0001b2c16',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f0f92e31-fc87-11ed-0a80-0db0001b2c16'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fd8f0f1b-fc83-11ed-0a80-0c2300243d61/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 51000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 25000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630121101841' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fd8f0f1b-fc83-11ed-0a80-0c2300243d61/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 20,
    reserve: 0,
    inTransit: 0,
    quantity: 20,
    barcode: '4630121101841'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/787e33e0-fca7-11ed-0a80-0c23002a9220',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=787e2672-fca7-11ed-0a80-0c23002a921e'
    },
    id: '787e33e0-fca7-11ed-0a80-0c23002a9220',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:32:56.921',
    name: 'Зубная паста "Камчатская минеральная" 100гр',
    syncId: '259e9010-2f7a-4949-b020-3961cc38164f',
    code: '00070',
    externalCode: 'vch14yVGhji0pLnz0CRCU0',
    archived: false,
    pathName: 86,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/828cee7f-fca7-11ed-0a80-01e5001e627e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=828cee7f-fca7-11ed-0a80-01e5001e627e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/787e33e0-fca7-11ed-0a80-0c23002a9220/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 16400,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174432710' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/787e33e0-fca7-11ed-0a80-0c23002a9220/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 18,
    reserve: 0,
    inTransit: 0,
    quantity: 18,
    barcode: '4607174432710'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fb729d49-fca6-11ed-0a80-0f80002a833b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=fb72904e-fca6-11ed-0a80-0f80002a8339'
    },
    id: 'fb729d49-fca6-11ed-0a80-0f80002a833b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:32:49.053',
    name: 'Зубная паста "7 северных трав" 100гр',
    syncId: '07e216f9-2bdf-4326-9511-d656273e6e98',
    code: '00069',
    externalCode: 'enh5T5uvgONOQpme7Dxq71',
    archived: false,
    pathName: 86,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/828cee7f-fca7-11ed-0a80-01e5001e627e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=828cee7f-fca7-11ed-0a80-01e5001e627e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fb729d49-fca6-11ed-0a80-0f80002a833b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 14600,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4607174432703' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/fb729d49-fca6-11ed-0a80-0f80002a833b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 18,
    reserve: 0,
    inTransit: 0,
    quantity: 18,
    barcode: '4607174432703'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a8fb6b3d-fca7-11ed-0a80-0f80002aa00e',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a8fb5fd5-fca7-11ed-0a80-0f80002aa00c'
    },
    id: 'a8fb6b3d-fca7-11ed-0a80-0f80002aa00e',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:33:19.680',
    name: 'Крем для рук "7% Collagen" 500мл',
    syncId: '61e09317-0c6a-4c70-a56e-577fb8f8ab49',
    code: '00071',
    externalCode: 'MKZTn2wOg1blZo9NTrrjI2',
    archived: false,
    pathName: 88,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/fd3fe7e4-fca7-11ed-0a80-1342001d386a',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=fd3fe7e4-fca7-11ed-0a80-1342001d386a'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a8fb6b3d-fca7-11ed-0a80-0f80002aa00e/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 21700,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079564323' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a8fb6b3d-fca7-11ed-0a80-0f80002aa00e/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '4630079564323'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c106be72-fca4-11ed-0a80-000f0029ef41',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c106ab1f-fca4-11ed-0a80-000f0029ef3f'
    },
    id: 'c106be72-fca4-11ed-0a80-000f0029ef41',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:33:32.020',
    name: 'Крем-маска для рук "Био. S.O.S. Восстановление&Омоложение" 75мл',
    syncId: '76cae057-8133-4ba9-b427-26e14c51afe0',
    code: '00061',
    externalCode: 'SjjWrTzfgI78vPqq0qSQz0',
    archived: false,
    pathName: 88,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/fd3fe7e4-fca7-11ed-0a80-1342001d386a',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=fd3fe7e4-fca7-11ed-0a80-1342001d386a'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c106be72-fca4-11ed-0a80-000f0029ef41/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 33000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 17600,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079565399' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c106be72-fca4-11ed-0a80-000f0029ef41/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 8,
    reserve: 0,
    inTransit: 0,
    quantity: 8,
    barcode: '4630079565399'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c1d3d141-fca7-11ed-0a80-110f002a97bd',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c1d3c809-fca7-11ed-0a80-110f002a97bb'
    },
    id: 'c1d3d141-fca7-11ed-0a80-110f002a97bd',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:33:11.446',
    name: 'Крем для рук "5% Pantenol" 500мл',
    syncId: '574b9f52-b335-4228-ac8c-f0b590d092c7',
    code: '00072',
    externalCode: 'IXYvNMqahHVM5Je46cYzI2',
    archived: false,
    pathName: 88,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/fd3fe7e4-fca7-11ed-0a80-1342001d386a',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=fd3fe7e4-fca7-11ed-0a80-1342001d386a'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c1d3d141-fca7-11ed-0a80-110f002a97bd/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 21700,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '4630079564316' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c1d3d141-fca7-11ed-0a80-110f002a97bd/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 6,
    reserve: 0,
    inTransit: 0,
    quantity: 6,
    barcode: '4630079564316'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/03fe1585-0609-11ee-0a80-0d46001ab5cb',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'bundle',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=03fe0d4a-0609-11ee-0a80-0d46001ab5c9'
    },
    id: '03fe1585-0609-11ee-0a80-0d46001ab5cb',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 17:30:28.625',
    name: 'тест массаж цена',
    code: '00175',
    externalCode: '-h9-GNRqgwGL0LLZyFN8f1',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/03fe1585-0609-11ee-0a80-0d46001ab5cb/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 110000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 200000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    barcodes: [{ ean13: '2000000000466' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    trackingType: 'NOT_TRACKED',
    components: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/03fe1585-0609-11ee-0a80-0d46001ab5cb/components',
        type: 'bundlecomponent',
        mediaType: 'application/json',
        size: 2,
        limit: 1000,
        offset: 0
      }
    },
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/03fe1585-0609-11ee-0a80-0d46001ab5cb/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000466'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/200f2c73-046e-11ee-0a80-142800126ec7',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'service',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=200f22b9-046e-11ee-0a80-142800126ec5'
    },
    id: '200f2c73-046e-11ee-0a80-142800126ec7',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:29:12.568',
    name: 'Тестовая услуга',
    code: '00150',
    externalCode: 'NfciCnWqjF468d0zJu4L02',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 100000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000145' }],
    paymentItemType: 'SERVICE',
    discountProhibited: false,
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/200f2c73-046e-11ee-0a80-142800126ec7/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000145'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/381f0474-0609-11ee-0a80-0d46001ac432',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'bundle',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=381efcfc-0609-11ee-0a80-0d46001ac430'
    },
    id: '381f0474-0609-11ee-0a80-0d46001ac432',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 17:31:56.074',
    name: 'тест массаж куски',
    code: '00176',
    externalCode: 'guJoln0XiH2HLE2Ob466u3',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/381f0474-0609-11ee-0a80-0d46001ac432/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 120000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 130000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    barcodes: [{ ean13: '2000000000473' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    trackingType: 'NOT_TRACKED',
    components: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/381f0474-0609-11ee-0a80-0d46001ac432/components',
        type: 'bundlecomponent',
        mediaType: 'application/json',
        size: 3,
        limit: 1000,
        offset: 0
      }
    },
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/381f0474-0609-11ee-0a80-0d46001ac432/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000473'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/941353f9-fcba-11ed-0a80-110f002d3a67',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=94134adf-fcba-11ed-0a80-110f002d3a65'
    },
    id: '941353f9-fcba-11ed-0a80-110f002d3a67',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:19:47.580',
    name: 'Общий массаж тела (60 минут)',
    syncId: '658a0359-d154-40bb-bb37-3b4d116e4cb3',
    code: '00134',
    externalCode: '4dCR7UNVitvuK8PDCTwLn2',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/941353f9-fcba-11ed-0a80-110f002d3a67/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 290000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00017' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/941353f9-fcba-11ed-0a80-110f002d3a67/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: -1,
    reserve: 0,
    inTransit: 0,
    quantity: -1,
    barcode: 'СП00017'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/9a3440bc-05f5-11ee-0a80-051c0016b193',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'bundle',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9a3435d3-05f5-11ee-0a80-051c0016b191'
    },
    id: '9a3440bc-05f5-11ee-0a80-051c0016b193',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 15:11:30.685',
    name: 'zxczxcc',
    code: '00174',
    externalCode: '-HT0LNxphrqIV9y6CDiiX1',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/9a3440bc-05f5-11ee-0a80-051c0016b193/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    barcodes: [{ ean13: '2000000000459' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    trackingType: 'NOT_TRACKED',
    components: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/9a3440bc-05f5-11ee-0a80-051c0016b193/components',
        type: 'bundlecomponent',
        mediaType: 'application/json',
        size: 2,
        limit: 1000,
        offset: 0
      }
    },
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/9a3440bc-05f5-11ee-0a80-051c0016b193/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000459'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a35d8d9b-fcba-11ed-0a80-0c23002d3e54',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a35d8506-fcba-11ed-0a80-0c23002d3e52'
    },
    id: 'a35d8d9b-fcba-11ed-0a80-0c23002d3e54',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:19:47.617',
    name: 'Общий массаж тела в 4 руки',
    syncId: '8fee6450-195b-4cbf-96f7-407aebf74fc2',
    code: '00135',
    externalCode: '0ti6FqD2i6gvnj9y5NZpc3',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a35d8d9b-fcba-11ed-0a80-0c23002d3e54/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 400000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00018' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a35d8d9b-fcba-11ed-0a80-0c23002d3e54/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00018'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bae71da7-fcba-11ed-0a80-0951002cf669',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=bae70e03-fcba-11ed-0a80-0951002cf667'
    },
    id: 'bae71da7-fcba-11ed-0a80-0951002cf669',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:19:47.529',
    name: 'Лимфодренажный ручной массаж (60 мин.)',
    syncId: '2c9a0c92-af6b-4445-900d-07bacbc9ef72',
    code: '00136',
    externalCode: 'WHPCXQCSirxMFM11zjCdJ1',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bae71da7-fcba-11ed-0a80-0951002cf669/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 340000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00019' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/bae71da7-fcba-11ed-0a80-0951002cf669/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00019'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d18f926e-fcba-11ed-0a80-000f002d153c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=d18f764e-fcba-11ed-0a80-000f002d153a'
    },
    id: 'd18f926e-fcba-11ed-0a80-000f002d153c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:35:19.747',
    name: 'Детский массаж (60 мин.)',
    syncId: '087663a7-6d33-4aba-8ee7-a522988d4d8a',
    code: '00137',
    externalCode: 'V7GlvZWhhaExHBMrwZdrY3',
    archived: false,
    pathName: 92,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/017496c6-fcbb-11ed-0a80-0f7f001e5ffc',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=017496c6-fcbb-11ed-0a80-0f7f001e5ffc'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d18f926e-fcba-11ed-0a80-000f002d153c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 240000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00020' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/d18f926e-fcba-11ed-0a80-000f002d153c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00020'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e3e84c8a-05d1-11ee-0a80-13d70005d5ad',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e3e84056-05d1-11ee-0a80-13d70005d5ab'
    },
    id: 'e3e84c8a-05d1-11ee-0a80-13d70005d5ad',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:56:49.557',
    name: 'Микс из фруктов, ягод и орехов кедровых',
    code: '00173',
    externalCode: 'HlMTCJuAhWViQbbnjXtpo2',
    archived: false,
    pathName: 99,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/f95c1338-05d1-11ee-0a80-01f000058071',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=f95c1338-05d1-11ee-0a80-01f000058071'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e3e84c8a-05d1-11ee-0a80-13d70005d5ad/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 40000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000428' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e3e84c8a-05d1-11ee-0a80-13d70005d5ad/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000428'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8653cc4e-063f-11ee-0a80-07c20013b7f7',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=8653bc78-063f-11ee-0a80-07c20013b7f5'
    },
    id: '8653cc4e-063f-11ee-0a80-07c20013b7f7',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-09 00:03:19.548',
    name: 'Мочалка "Кедровая" льняная',
    code: '00178',
    externalCode: 'EsBd88ajhASPikh0RKj271',
    archived: false,
    pathName: 100,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/cebfda56-063f-11ee-0a80-01f0001485b3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=cebfda56-063f-11ee-0a80-01f0001485b3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8653cc4e-063f-11ee-0a80-07c20013b7f7/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 36500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 16500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000503' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8653cc4e-063f-11ee-0a80-07c20013b7f7/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000503'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a2b4f9e6-063f-11ee-0a80-109800148a91',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a2b4e6ee-063f-11ee-0a80-109800148a8f'
    },
    id: 'a2b4f9e6-063f-11ee-0a80-109800148a91',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-09 00:03:34.998',
    name: 'Мочалка "Можжевеловая" льняная',
    code: '00179',
    externalCode: 'dtoaklK3ioGxiO7CpBRui1',
    archived: false,
    pathName: 100,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/cebfda56-063f-11ee-0a80-01f0001485b3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=cebfda56-063f-11ee-0a80-01f0001485b3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a2b4f9e6-063f-11ee-0a80-109800148a91/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 36500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 16500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000510' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a2b4f9e6-063f-11ee-0a80-109800148a91/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000510'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b892e5bb-063f-11ee-0a80-08d5000633a6',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=b892dd0b-063f-11ee-0a80-08d5000633a4'
    },
    id: 'b892e5bb-063f-11ee-0a80-08d5000633a6',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-09 00:03:51.372',
    name: 'Мочалка "Пихтовая" льняная',
    code: '00180',
    externalCode: 'hhF2BsbDgeQ6fQHb18ydN0',
    archived: false,
    pathName: 100,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/cebfda56-063f-11ee-0a80-01f0001485b3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=cebfda56-063f-11ee-0a80-01f0001485b3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b892e5bb-063f-11ee-0a80-08d5000633a6/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 36500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 16500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000527' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b892e5bb-063f-11ee-0a80-08d5000633a6/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000527'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c7bebc0e-063f-11ee-0a80-03600014b9c0',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c7bea971-063f-11ee-0a80-03600014b9be'
    },
    id: 'c7bebc0e-063f-11ee-0a80-03600014b9c0',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-09 00:04:07.379',
    name: 'Мочалка "Сосновая" льняная',
    code: '00181',
    externalCode: 'TeudCQSCgntqr99OKAk6u3',
    archived: false,
    pathName: 100,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/cebfda56-063f-11ee-0a80-01f0001485b3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=cebfda56-063f-11ee-0a80-01f0001485b3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c7bebc0e-063f-11ee-0a80-03600014b9c0/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 36500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 16500,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000534' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c7bebc0e-063f-11ee-0a80-03600014b9c0/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000534'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1e7dd259-0611-11ee-0a80-142f001d2b7d',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=1e7dc8c8-0611-11ee-0a80-142f001d2b7b'
    },
    id: '1e7dd259-0611-11ee-0a80-142f001d2b7d',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 18:28:28.958',
    name: 'Пищевой тест',
    code: '00177',
    externalCode: 'FFyYDPhMjPiPcECXqq0db1',
    archived: false,
    pathName: 104,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/13a46a2a-fcb2-11ed-0a80-0838001e0c15',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=13a46a2a-fcb2-11ed-0a80-0838001e0c15'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1e7dd259-0611-11ee-0a80-142f001d2b7d/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 13200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 15000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 10000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000497' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/1e7dd259-0611-11ee-0a80-142f001d2b7d/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000497'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4cdad7f7-fcb0-11ed-0a80-0951002ba070',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=4cdac1fe-fcb0-11ed-0a80-0951002ba06e'
    },
    id: '4cdad7f7-fcb0-11ed-0a80-0951002ba070',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:38:00.255',
    name: 'Мёд разнотравье 10 гр.',
    syncId: 'd7d2b9d2-5110-44bd-873d-13134b61f35d',
    code: '00109',
    externalCode: 'B34Kjz7jizRDRWrqQQwpv3',
    archived: false,
    pathName: 105,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/2101742c-fcb2-11ed-0a80-01e5001ee75f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=2101742c-fcb2-11ed-0a80-01e5001ee75f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4cdad7f7-fcb0-11ed-0a80-0951002ba070/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 750,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'Т000003' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4cdad7f7-fcb0-11ed-0a80-0951002ba070/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 100,
    reserve: 0,
    inTransit: 0,
    quantity: 100,
    barcode: 'Т000003'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/62c21266-fcb0-11ed-0a80-0951002ba37c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=62c207c5-fcb0-11ed-0a80-0951002ba37a'
    },
    id: '62c21266-fcb0-11ed-0a80-0951002ba37c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:38:10.579',
    name: 'Мёд таежный 10 гр.',
    syncId: 'c70a9c36-7e36-463b-9637-d1d009fd844c',
    code: '00110',
    externalCode: 'aLTi5n9tjDJ6C6G5jfyxb2',
    archived: false,
    pathName: 105,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/2101742c-fcb2-11ed-0a80-01e5001ee75f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=2101742c-fcb2-11ed-0a80-01e5001ee75f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/62c21266-fcb0-11ed-0a80-0951002ba37c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1500,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 750,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'Т000005' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/62c21266-fcb0-11ed-0a80-0951002ba37c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 300,
    reserve: 0,
    inTransit: 0,
    quantity: 300,
    barcode: 'Т000005'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/753c6dde-05d1-11ee-0a80-01f000055afc',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=753c64c3-05d1-11ee-0a80-01f000055afa'
    },
    id: '753c6dde-05d1-11ee-0a80-01f000055afc',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:52:46.812',
    name: 'Мёд Алтайский',
    code: '00171',
    externalCode: '9qgmky-Oi43RChGXHYy0r1',
    archived: false,
    pathName: 105,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/2101742c-fcb2-11ed-0a80-01e5001ee75f',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=2101742c-fcb2-11ed-0a80-01e5001ee75f'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/753c6dde-05d1-11ee-0a80-01f000055afc/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 50000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000404' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 300,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/753c6dde-05d1-11ee-0a80-01f000055afc/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000404'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/065867c0-fcb0-11ed-0a80-0f80002be703',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=065859a6-fcb0-11ed-0a80-0f80002be701'
    },
    id: '065867c0-fcb0-11ed-0a80-0f80002be703',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:38:23.893',
    name: 'Клюква вяленая 10 гр.',
    syncId: '32012af5-26aa-4125-beb0-8496f5bbc16d',
    code: '00108',
    externalCode: 'ypYHKfI5gYjOglB-A8UoL0',
    archived: false,
    pathName: 109,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/2e3e86c8-fcb2-11ed-0a80-0333001f60d4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=2e3e86c8-fcb2-11ed-0a80-0333001f60d4'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/065867c0-fcb0-11ed-0a80-0f80002be703/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1800,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 900,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'Т000002' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/065867c0-fcb0-11ed-0a80-0f80002be703/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 100,
    reserve: 0,
    inTransit: 0,
    quantity: 100,
    barcode: 'Т000002'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e16f5e75-fcaf-11ed-0a80-000f002bab01',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e16f529b-fcaf-11ed-0a80-000f002baaff'
    },
    id: 'e16f5e75-fcaf-11ed-0a80-000f002bab01',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 18:38:33.974',
    name: 'Орех кедровый очищенный 10 гр.',
    syncId: '0fd081bd-bc9f-4fd9-949f-68dea615a78a',
    code: '00107',
    externalCode: '9dZsexEXhgb4MA9pvVgc-3',
    archived: false,
    pathName: 109,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/2e3e86c8-fcb2-11ed-0a80-0333001f60d4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=2e3e86c8-fcb2-11ed-0a80-0333001f60d4'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e16f5e75-fcaf-11ed-0a80-000f002bab01/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 3000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 1450,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'Т000001' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e16f5e75-fcaf-11ed-0a80-000f002bab01/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 300,
    reserve: 0,
    inTransit: 0,
    quantity: 300,
    barcode: 'Т000001'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14a84cca-05d1-11ee-0a80-0f0f00058079',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=14a8453d-05d1-11ee-0a80-0f0f00058077'
    },
    id: '14a84cca-05d1-11ee-0a80-0f0f00058079',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:50:04.771',
    name: 'Травяной чай "Таёжный"',
    code: '00168',
    externalCode: 'XnnhgQLjg5zZeH38BCU-n2',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14a84cca-05d1-11ee-0a80-0f0f00058079/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000374' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/14a84cca-05d1-11ee-0a80-0f0f00058079/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000374'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/38b5b995-05d1-11ee-0a80-003500057371',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=38b5aca7-05d1-11ee-0a80-00350005736f'
    },
    id: '38b5b995-05d1-11ee-0a80-003500057371',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:51:05.260',
    name: 'Саган-Дайля',
    code: '00169',
    externalCode: 'DeLawVYRjRTVZDi6CYKWL0',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/38b5b995-05d1-11ee-0a80-003500057371/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 50000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000381' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/38b5b995-05d1-11ee-0a80-003500057371/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000381'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4e32d5f0-05d1-11ee-0a80-003500057770',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=4e32ca21-05d1-11ee-0a80-00350005776e'
    },
    id: '4e32d5f0-05d1-11ee-0a80-003500057770',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:51:41.316',
    name: 'Золотой корень Родиола Розовая',
    code: '00170',
    externalCode: 'UvSJUJyzgsjnNH88m9Lo63',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4e32d5f0-05d1-11ee-0a80-003500057770/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 60000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000398' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/4e32d5f0-05d1-11ee-0a80-003500057770/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000398'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6965c9ad-05d0-11ee-0a80-11420005af3f',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=6965beec-05d0-11ee-0a80-11420005af3d'
    },
    id: '6965c9ad-05d0-11ee-0a80-11420005af3f',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:46:11.066',
    name: 'Иван-чай с садовыми ягодами "Бабушкин Сад"',
    code: '00164',
    externalCode: 'oA3Z7nRjiOdGu7Z5A4R5b0',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6965c9ad-05d0-11ee-0a80-11420005af3f/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000336' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/6965c9ad-05d0-11ee-0a80-11420005af3f/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000336'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8385c5a5-05d0-11ee-0a80-0035000552cf',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=8385bbcc-05d0-11ee-0a80-0035000552cd'
    },
    id: '8385c5a5-05d0-11ee-0a80-0035000552cf',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:46:01.276',
    name: 'Травяной чай "Хохот Шамана"',
    code: '00165',
    externalCode: '4ziudWs8iOtlYMs83vs213',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8385c5a5-05d0-11ee-0a80-0035000552cf/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000343' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/8385c5a5-05d0-11ee-0a80-0035000552cf/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000343'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9ff1c25b-05d0-11ee-0a80-07c20004e8f1',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9ff1ba3a-05d0-11ee-0a80-07c20004e8ef'
    },
    id: '9ff1c25b-05d0-11ee-0a80-07c20004e8f1',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:46:48.958',
    name: 'Травяной чай "Утро в сосновом бору"',
    code: '00166',
    externalCode: 'ZRezKXgjj7h3tEPI5ctf-2',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9ff1c25b-05d0-11ee-0a80-07c20004e8f1/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000350' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9ff1c25b-05d0-11ee-0a80-07c20004e8f1/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000350'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eeed5084-05d0-11ee-0a80-06f2000531cc',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=eeed49b7-05d0-11ee-0a80-06f2000531ca'
    },
    id: 'eeed5084-05d0-11ee-0a80-06f2000531cc',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:49:01.483',
    name: 'Травяной чай "Мятный Эвкалипт"',
    code: '00167',
    externalCode: 'a-SepncAjdcoEdH8HsEGV3',
    archived: false,
    pathName: 113,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/336ec171-fcb2-11ed-0a80-0795001e1fe3',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=336ec171-fcb2-11ed-0a80-0795001e1fe3'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eeed5084-05d0-11ee-0a80-06f2000531cc/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 35000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000367' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 50,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/eeed5084-05d0-11ee-0a80-06f2000531cc/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000367'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3aa13569-fcbb-11ed-0a80-0f80002d4e86',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3aa12c7c-fcbb-11ed-0a80-0f80002d4e84'
    },
    id: '3aa13569-fcbb-11ed-0a80-0f80002d4e86',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:25:19.394',
    name: 'Стояние на гвоздях',
    syncId: 'b03e382f-3495-4ca5-8396-f7155a4e47b4',
    code: '00140',
    externalCode: 'UD3s3ZGLhkyfLeHmYVajA2',
    archived: false,
    pathName: 117,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/796cbdb2-fcbb-11ed-0a80-0e91001ee22a',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=796cbdb2-fcbb-11ed-0a80-0e91001ee22a'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3aa13569-fcbb-11ed-0a80-0f80002d4e86/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 250000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00023' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3aa13569-fcbb-11ed-0a80-0f80002d4e86/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00023'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e174745d-fcba-11ed-0a80-0951002cf9f3',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e1745f72-fcba-11ed-0a80-0951002cf9f1'
    },
    id: 'e174745d-fcba-11ed-0a80-0951002cf9f3',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:20:29.669',
    name: 'Арома-сауна (20 мин.)',
    syncId: 'b2662d89-75a2-4909-9a02-6e7f840a0d12',
    code: '00138',
    externalCode: 'admreLN5h8mYHI--SdtWa1',
    archived: false,
    pathName: 119,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/15fb6442-fcbb-11ed-0a80-1093001ed840',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=15fb6442-fcbb-11ed-0a80-1093001ed840'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e174745d-fcba-11ed-0a80-0951002cf9f3/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 100000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00021' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e174745d-fcba-11ed-0a80-0951002cf9f3/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00021'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f1e70198-fcba-11ed-0a80-000f002d182c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f1e6f03b-fcba-11ed-0a80-000f002d182a'
    },
    id: 'f1e70198-fcba-11ed-0a80-000f002d182c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-05-27 21:20:29.614',
    name: 'Арома-хаммам (60 мин.)',
    syncId: 'ee9ce976-03dd-4ae7-a721-87effca59d76',
    code: '00139',
    externalCode: 'fhXQ4bZnhhT6dTsubBhc51',
    archived: false,
    pathName: 119,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/15fb6442-fcbb-11ed-0a80-1093001ed840',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=15fb6442-fcbb-11ed-0a80-1093001ed840'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f1e70198-fcba-11ed-0a80-000f002d182c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 200000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00022' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f1e70198-fcba-11ed-0a80-000f002d182c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00022'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3acc000a-fcb4-11ed-0a80-0951002c292b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3acbf2ee-fcb4-11ed-0a80-0951002c2929'
    },
    id: '3acc000a-fcb4-11ed-0a80-0951002c292b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:48:59.967',
    name: 'Шпатель деревянный 2мм',
    syncId: '29de42fa-f558-453e-a868-a4692c76bd24',
    code: '00113',
    externalCode: 'Bz57Zectg2crpoODeBl4Q3',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3acc000a-fcb4-11ed-0a80-0951002c292b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 300,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '311723305' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3acc000a-fcb4-11ed-0a80-0951002c292b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 100,
    reserve: 0,
    inTransit: 0,
    quantity: 100,
    barcode: '311723305'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/71d077ff-fcb4-11ed-0a80-0951002c3028',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=71d05eac-fcb4-11ed-0a80-0951002c3026'
    },
    id: '71d077ff-fcb4-11ed-0a80-0951002c3028',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:48:53.332',
    name: 'Спонжик для умывания',
    syncId: 'f917c4bc-a162-4a75-b25c-93ca8ba57de8',
    code: '00114',
    externalCode: 'WpA8RMKQi8ufnKCkrwEnb0',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/71d077ff-fcb4-11ed-0a80-0951002c3028/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 5000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '936576960' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/71d077ff-fcb4-11ed-0a80-0951002c3028/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 20,
    reserve: 0,
    inTransit: 0,
    quantity: 20,
    barcode: '936576960'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/743aab6f-fcb5-11ed-0a80-0c23002c9ca3',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=743a9bfd-fcb5-11ed-0a80-0c23002c9ca1'
    },
    id: '743aab6f-fcb5-11ed-0a80-0c23002c9ca3',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:48:44.908',
    name: 'Бахилы',
    syncId: 'f436415f-f177-47f6-98d5-5b05fce6c82e',
    code: '00117',
    externalCode: 'rTRuel29huUNQBZq2b9Ek3',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/743aab6f-fcb5-11ed-0a80-0c23002c9ca3/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 350,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '897120185' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/743aab6f-fcb5-11ed-0a80-0c23002c9ca3/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 1000,
    reserve: 0,
    inTransit: 0,
    quantity: 1000,
    barcode: '897120185'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b651800f-fcb3-11ed-0a80-000f002c351a',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=b6517361-fcb3-11ed-0a80-000f002c3518'
    },
    id: 'b651800f-fcb3-11ed-0a80-000f002c351a',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:49:08.352',
    name: 'Тапки одноразовые',
    syncId: '46d91911-5fca-453f-9e0c-24cb1d8440c5',
    code: '00111',
    externalCode: 'uqzQvjapiDmmhoJ91Qlaw3',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b651800f-fcb3-11ed-0a80-000f002c351a/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 5200,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '800685638' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/b651800f-fcb3-11ed-0a80-000f002c351a/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 30,
    reserve: 0,
    inTransit: 0,
    quantity: 30,
    barcode: '800685638'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2d7462a-fcb4-11ed-0a80-0c23002c8683',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=c2d73db1-fcb4-11ed-0a80-0c23002c8681'
    },
    id: 'c2d7462a-fcb4-11ed-0a80-0c23002c8683',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:49:15.315',
    name: 'Перчатки виниловые L',
    syncId: '9bb91edd-278b-4360-8f7e-8a96126ccccd',
    code: '00115',
    externalCode: 's75MGnBdghPmzQ7jYvR602',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2d7462a-fcb4-11ed-0a80-0c23002c8683/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 1000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '609312691' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/c2d7462a-fcb4-11ed-0a80-0c23002c8683/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 100,
    reserve: 0,
    inTransit: 0,
    quantity: 100,
    barcode: '609312691'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e315ff51-fcb3-11ed-0a80-0c23002c69e2',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e315f1d2-fcb3-11ed-0a80-0c23002c69e0'
    },
    id: 'e315ff51-fcb3-11ed-0a80-0c23002c69e2',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:49:22.178',
    name: 'Простынь одноразовая черная',
    syncId: 'eadc9556-ab4e-47cc-ba5d-013f3efaa387',
    code: '00112',
    externalCode: 'bWndZEn1jeMxYGyMUhr2H3',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e315ff51-fcb3-11ed-0a80-0c23002c69e2/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 730,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '876859370' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e315ff51-fcb3-11ed-0a80-0c23002c69e2/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 150,
    reserve: 0,
    inTransit: 0,
    quantity: 150,
    barcode: '876859370'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f22eab0e-fcb4-11ed-0a80-000f002c5f1c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f22e972c-fcb4-11ed-0a80-000f002c5f1a'
    },
    id: 'f22eab0e-fcb4-11ed-0a80-000f002c5f1c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 16:49:29.600',
    name: 'Перчатки виниловые XL',
    syncId: '80c7e912-587e-496d-8ab1-6a9b713bcbe5',
    code: '00116',
    externalCode: 'bqImyVF5jtodvmaVud3mm0',
    archived: false,
    pathName: 120,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8a0ae22e-fcb2-11ed-0a80-094f001fccb8',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8a0ae22e-fcb2-11ed-0a80-094f001fccb8'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f22eab0e-fcb4-11ed-0a80-000f002c5f1c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 700,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '157826557' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f22eab0e-fcb4-11ed-0a80-000f002c5f1c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 100,
    reserve: 0,
    inTransit: 0,
    quantity: 100,
    barcode: '157826557'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/57974d09-049e-11ee-0a80-13cd0016ea02',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=579743e1-049e-11ee-0a80-13cd0016ea00'
    },
    id: '57974d09-049e-11ee-0a80-13cd0016ea02',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 23:24:32.072',
    name: 'серт 1',
    code: '00151',
    externalCode: '2WTC-rLChqlQwrsGE0U1D2',
    archived: false,
    pathName: 129,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/34360991-049e-11ee-0a80-142800172ed4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=34360991-049e-11ee-0a80-142800172ed4'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/57974d09-049e-11ee-0a80-13cd0016ea02/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 500000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '2000000000169' }],
    paymentItemType: 'GOOD',
    discountProhibited: true,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/57974d09-049e-11ee-0a80-13cd0016ea02/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0.4,
    reserve: 0,
    inTransit: 0,
    quantity: 0.4,
    barcode: '2000000000169'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/69d2a6a2-049e-11ee-0a80-035a001713b7',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=69d2a005-049e-11ee-0a80-035a001713b5'
    },
    id: '69d2a6a2-049e-11ee-0a80-035a001713b7',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 22:14:52.167',
    name: 'Серт 2',
    code: '00152',
    externalCode: 'xStgwlW-gGMYMbwnNZWKq0',
    archived: false,
    pathName: 129,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/34360991-049e-11ee-0a80-142800172ed4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=34360991-049e-11ee-0a80-142800172ed4'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/8e2eb543-99e9-4077-bc31-93b1359de9c4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/69d2a6a2-049e-11ee-0a80-035a001713b7/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1000000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: '2000000000176' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/69d2a6a2-049e-11ee-0a80-035a001713b7/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000176'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a7f02009-0529-11ee-0a80-029c0040e9e5',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a7f017a9-0529-11ee-0a80-029c0040e9e3'
    },
    id: 'a7f02009-0529-11ee-0a80-029c0040e9e5',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 14:51:36.407',
    name: 'Сертификат № 1',
    code: '00157',
    externalCode: 'hs5ay6NGgYvFARY67eDiT0',
    archived: false,
    pathName: 129,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/34360991-049e-11ee-0a80-142800172ed4',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=34360991-049e-11ee-0a80-142800172ed4'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a7f02009-0529-11ee-0a80-029c0040e9e5/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1000000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000237' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/a7f02009-0529-11ee-0a80-029c0040e9e5/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000237'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/58a8fcab-069d-11ee-0a80-01f100352dc6',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'bundle',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=58a8f1eb-069d-11ee-0a80-01f100352dc4'
    },
    id: '58a8fcab-069d-11ee-0a80-01f100352dc6',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-09 11:12:16.164',
    name: 'Комплект для кассы',
    code: '00182',
    externalCode: 'xHD1C2x0i32pWxjcXyrAZ3',
    archived: false,
    pathName: 130,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/667eeb99-fcba-11ed-0a80-0e91001ed987',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=667eeb99-fcba-11ed-0a80-0e91001ed987'
      }
    },
    useParentVat: true,
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/58a8fcab-069d-11ee-0a80-01f100352dc6/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 100000,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 200000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    barcodes: [{ ean13: '2000000000541' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    trackingType: 'NOT_TRACKED',
    components: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/58a8fcab-069d-11ee-0a80-01f100352dc6/components',
        type: 'bundlecomponent',
        mediaType: 'application/json',
        size: 3,
        limit: 1000,
        offset: 0
      }
    },
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/58a8fcab-069d-11ee-0a80-01f100352dc6/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000541'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9d6ac442-05d1-11ee-0a80-06f200055704',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9d6abde9-05d1-11ee-0a80-06f200055702'
    },
    id: '9d6ac442-05d1-11ee-0a80-06f200055704',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-08 10:54:38.496',
    name: 'Малина сублимированная',
    code: '00172',
    externalCode: 'fBUSzQ1Tg0e8uumBnhoxz0',
    archived: false,
    pathName: 131,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/abbe573e-05d1-11ee-0a80-0c730005bb1e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=abbe573e-05d1-11ee-0a80-0c730005bb1e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9d6ac442-05d1-11ee-0a80-06f200055704/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 25000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000411' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9d6ac442-05d1-11ee-0a80-06f200055704/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: '2000000000411'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/054dd39d-fcba-11ed-0a80-0f80002d30ec',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=054dc579-fcba-11ed-0a80-0f80002d30ea'
    },
    id: '054dd39d-fcba-11ed-0a80-0f80002d30ec',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.406',
    name: 'Солнце Сибири',
    syncId: 'e81bb798-1a6c-4099-b375-c2707da3847f',
    code: '00128',
    externalCode: 'SYp2aVJxiQ-zwkAJN38mq3',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/054dd39d-fcba-11ed-0a80-0f80002d30ec/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 980000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00011' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/054dd39d-fcba-11ed-0a80-0f80002d30ec/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00011'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/10f82d96-0541-11ee-0a80-06eb0029d900',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'service',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=10f82099-0541-11ee-0a80-06eb0029d8fe'
    },
    id: '10f82d96-0541-11ee-0a80-06eb0029d900',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 17:39:11.086',
    name: 'ПРИКОСНОВЕНИЕ ТАЙГИ',
    description: 'Ознакомительная программа',
    code: '00162',
    externalCode: 'nS8PFFSMitXsFrFsrMl5h1',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 250000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 250000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000305' }],
    paymentItemType: 'SERVICE',
    discountProhibited: false,
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/10f82d96-0541-11ee-0a80-06eb0029d900/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000305'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/16d323d2-fcba-11ed-0a80-0951002ce490',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=16d30d2d-fcba-11ed-0a80-0951002ce48e'
    },
    id: '16d323d2-fcba-11ed-0a80-0951002ce490',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.346',
    name: 'Арктические водоросли',
    syncId: 'fc514e9a-b602-41e7-92f6-7282de6f34f1',
    code: '00129',
    externalCode: 'aYgQI33ohhcMj42ddJMBQ0',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/16d323d2-fcba-11ed-0a80-0951002ce490/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1550000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00012' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/16d323d2-fcba-11ed-0a80-0951002ce490/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00012'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2660b22b-fcba-11ed-0a80-000f002d0435',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=2660a7d0-fcba-11ed-0a80-000f002d0433'
    },
    id: '2660b22b-fcba-11ed-0a80-000f002d0435',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.354',
    name: 'Живая Тайга (1 чел.)',
    syncId: '3780650d-93a0-4a89-a22d-fa4ba0ddfa0b',
    code: '00130',
    externalCode: '4guj-Ifkhky5gbxuKxzbG3',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2660b22b-fcba-11ed-0a80-000f002d0435/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 990000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00013' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/2660b22b-fcba-11ed-0a80-000f002d0435/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00013'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3580ee91-fcba-11ed-0a80-110f002d307f',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=3580e28f-fcba-11ed-0a80-110f002d307d'
    },
    id: '3580ee91-fcba-11ed-0a80-110f002d307f',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.365',
    name: 'Живая Тайга (2 чел)',
    syncId: '462f4363-0be4-4d49-b96f-f3d81ce017f5',
    code: '00131',
    externalCode: '3poS0OJgiZ0H0eOb6EqlR2',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3580ee91-fcba-11ed-0a80-110f002d307f/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1820000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00014' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/3580ee91-fcba-11ed-0a80-110f002d307f/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00014'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/537ac096-fcba-11ed-0a80-110f002d335b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=537ab6ba-fcba-11ed-0a80-110f002d3359'
    },
    id: '537ac096-fcba-11ed-0a80-110f002d335b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.359',
    name: 'Горное Озеро',
    syncId: '7fd0025f-6056-4d1c-8bac-12213409c873',
    code: '00133',
    externalCode: '4QyX5zOLgOJcGIXZgLA7X1',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/537ac096-fcba-11ed-0a80-110f002d335b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 490000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00016' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/537ac096-fcba-11ed-0a80-110f002d335b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00016'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5fa19998-fcb9-11ed-0a80-110f002d1ac7',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=5fa1887c-fcb9-11ed-0a80-110f002d1ac5'
    },
    id: '5fa19998-fcb9-11ed-0a80-110f002d1ac7',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.402',
    name: 'Секреты океана',
    syncId: '20376ba3-2879-43d5-b495-188642bf4b34',
    code: '00120',
    externalCode: 'qBdMyJpwipcMV1YfRgWnh0',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5fa19998-fcb9-11ed-0a80-110f002d1ac7/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 440000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00003' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/5fa19998-fcb9-11ed-0a80-110f002d1ac7/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00003'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/6ab227e5-0541-11ee-0a80-113200298b73',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'bundle',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=6ab22304-0541-11ee-0a80-113200298b71'
    },
    id: '6ab227e5-0541-11ee-0a80-113200298b73',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 17:45:13.418',
    name: 'название комплект',
    code: '00163',
    externalCode: '8qKCaUCXiM7lQcX8JU4kk0',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/6ab227e5-0541-11ee-0a80-113200298b73/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1000000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    barcodes: [{ ean13: '2000000000329' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    trackingType: 'NOT_TRACKED',
    components: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/6ab227e5-0541-11ee-0a80-113200298b73/components',
        type: 'bundlecomponent',
        mediaType: 'application/json',
        size: 3,
        limit: 1000,
        offset: 0
      }
    },
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/bundle/6ab227e5-0541-11ee-0a80-113200298b73/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000329'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/741ecc57-fcb9-11ed-0a80-0c23002d1ef5',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=741ec2f6-fcb9-11ed-0a80-0c23002d1ef3'
    },
    id: '741ecc57-fcb9-11ed-0a80-0c23002d1ef5',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.384',
    name: 'Прохлада Тайги',
    syncId: 'c0bc1b56-10f6-437c-aabd-7f2a5c77d167',
    code: '00121',
    externalCode: 'AfVwfi7XgTS5nDY-xxpX33',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/741ecc57-fcb9-11ed-0a80-0c23002d1ef5/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 510000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00004' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/741ecc57-fcb9-11ed-0a80-0c23002d1ef5/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00004'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/83e3137a-fcb9-11ed-0a80-0c23002d20d6',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=83e309e7-fcb9-11ed-0a80-0c23002d20d4'
    },
    id: '83e3137a-fcb9-11ed-0a80-0c23002d20d6',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.397',
    name: 'Северное Золото',
    syncId: '75eaf8ab-98b0-4a85-8887-16b230db1195',
    code: '00122',
    externalCode: 'skSA-GhYgF09TXCV6Q9WI1',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/83e3137a-fcb9-11ed-0a80-0c23002d20d6/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 810000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00005' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/83e3137a-fcb9-11ed-0a80-0c23002d20d6/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00005'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9b4b292f-fcb9-11ed-0a80-000f002cf567',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=9b4b194d-fcb9-11ed-0a80-000f002cf565'
    },
    id: '9b4b292f-fcb9-11ed-0a80-000f002cf567',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.393',
    name: 'Северная ягода',
    syncId: '5c8e9daa-8c4c-4d64-afb9-c81a337e2354',
    code: '00123',
    externalCode: 'mYrnABLihKJJwRcL8YcTy1',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9b4b292f-fcb9-11ed-0a80-000f002cf567/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 770000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00006' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/9b4b292f-fcb9-11ed-0a80-000f002cf567/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00006'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/a46ac050-0540-11ee-0a80-0027002969ae',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'service',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=a46ab62a-0540-11ee-0a80-0027002969ac'
    },
    id: 'a46ac050-0540-11ee-0a80-0027002969ae',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 17:36:08.964',
    name: 'МЁД И ТРАВЫ',
    description: 'Антицеллюлитная программа',
    code: '00160',
    externalCode: 'RptlMGRPgOUYm81ZBfUP01',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 670000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 670000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000282' }],
    paymentItemType: 'SERVICE',
    discountProhibited: false,
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/a46ac050-0540-11ee-0a80-0027002969ae/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000282'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ac28940a-fcb9-11ed-0a80-0951002cd8c9',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=ac288242-fcb9-11ed-0a80-0951002cd8c7'
    },
    id: 'ac28940a-fcb9-11ed-0a80-0951002cd8c9',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.369',
    name: 'Лосиное Молоко',
    syncId: '5947689a-8d00-4ce5-9036-9ea7c7f6098f',
    code: '00124',
    externalCode: 'tS0Has-AioSAVupTVv28O2',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ac28940a-fcb9-11ed-0a80-0951002cd8c9/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 680000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00007' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/ac28940a-fcb9-11ed-0a80-0951002cd8c9/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00007'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cf32a803-fcb9-11ed-0a80-110f002d264b',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=cf329f41-fcb9-11ed-0a80-110f002d2649'
    },
    id: 'cf32a803-fcb9-11ed-0a80-110f002d264b',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.373',
    name: 'Объятия Тайги (1 чел)',
    syncId: '3c03d5f6-d5d6-496a-8af2-15165f65219a',
    code: '00125',
    externalCode: 'S35A2q0jhD2uCK39Ip4Lg2',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cf32a803-fcb9-11ed-0a80-110f002d264b/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 760000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00008' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/cf32a803-fcb9-11ed-0a80-110f002d264b/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00008'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e744d5f3-fcb9-11ed-0a80-0951002cdf46',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e744c774-fcb9-11ed-0a80-0951002cdf44'
    },
    id: 'e744d5f3-fcb9-11ed-0a80-0951002cdf46',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.376',
    name: 'Объятия Тайги (2 чел.)',
    syncId: '033facb2-64b4-45a1-b4e6-2c6ed88adb5c',
    code: '00126',
    externalCode: '9tq9XSKcgYvCABsUhnYMO1',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e744d5f3-fcb9-11ed-0a80-0951002cdf46/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 1370000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00009' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/e744d5f3-fcb9-11ed-0a80-0951002cdf46/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00009'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/e7653021-0540-11ee-0a80-13cd00298867',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'service',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=e765294f-0540-11ee-0a80-13cd00298865'
    },
    id: 'e7653021-0540-11ee-0a80-13cd00298867',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-07 17:38:01.316',
    name: 'РИТУАЛ ШАМАНКИ',
    description: 'Программа для тела',
    code: '00161',
    externalCode: '8fUl92qkhSU8s3j2uTGjw3',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 630000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 630000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ ean13: '2000000000299' }],
    paymentItemType: 'SERVICE',
    discountProhibited: false,
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/service/e7653021-0540-11ee-0a80-13cd00298867/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    barcode: '2000000000299'
  },
  {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f4f88966-fcb9-11ed-0a80-000f002cff0c',
      metadataHref:
        'https://online.moysklad.ru/api/remap/1.2/entity/product/metadata',
      type: 'product',
      mediaType: 'application/json',
      uuidHref:
        'https://online.moysklad.ru/app/#good/edit?id=f4f8733a-fcb9-11ed-0a80-000f002cff0a'
    },
    id: 'f4f88966-fcb9-11ed-0a80-000f002cff0c',
    accountId: '800be114-fc63-11ed-0a80-0c2200009a41',
    owner: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/employee/803505e1-fc63-11ed-0a80-000d00187f67',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata',
        type: 'employee',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#employee/edit?id=803505e1-fc63-11ed-0a80-000d00187f67'
      }
    },
    shared: true,
    group: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/group/800c6319-fc63-11ed-0a80-0c2200009a42',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/group/metadata',
        type: 'group',
        mediaType: 'application/json'
      }
    },
    updated: '2023-06-06 16:34:16.351',
    name: 'Горный Алтай',
    syncId: '840e3b3b-c541-475f-8b69-39ae1b6ba549',
    code: '00127',
    externalCode: '80VpTomwhv6HFXQAm3ikz2',
    archived: false,
    pathName: 142,
    productFolder: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/8ab7e882-fcbb-11ed-0a80-1093001edb4e',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata',
        type: 'productfolder',
        mediaType: 'application/json',
        uuidHref:
          'https://online.moysklad.ru/app/#good/edit?id=8ab7e882-fcbb-11ed-0a80-1093001edb4e'
      }
    },
    useParentVat: true,
    uom: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/uom/e673f0ca-965d-4fa6-b419-e5dff6c26ba0',
        metadataHref:
          'https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata',
        type: 'uom',
        mediaType: 'application/json'
      }
    },
    images: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f4f88966-fcb9-11ed-0a80-000f002cff0c/images',
        type: 'image',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    minPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    salePrices: [
      {
        value: 640000,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/804d661d-fc63-11ed-0a80-000d00187fdb',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '804d661d-fc63-11ed-0a80-000d00187fdb',
          name: 'Цена продажи',
          externalCode: 'cbcf493b-55bc-11d9-848a-00112f43529a'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5ba22dc6-049c-11ee-0a80-035a0016e822',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '5ba22dc6-049c-11ee-0a80-035a0016e822',
          name: 'Цена на сайте',
          externalCode: 'd23e67b2-2157-4de1-a90e-3d56dee4d294'
        }
      },
      {
        value: 0,
        currency: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
            metadataHref:
              'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
            type: 'currency',
            mediaType: 'application/json',
            uuidHref:
              'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
          }
        },
        priceType: {
          meta: {
            href: 'https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/3a185c04-0516-11ee-0a80-01e700212409',
            type: 'pricetype',
            mediaType: 'application/json'
          },
          id: '3a185c04-0516-11ee-0a80-01e700212409',
          name: 'Цена VIP',
          externalCode: '3142dd36-c69f-4d68-bfb4-e12a57f622f6'
        }
      }
    ],
    buyPrice: {
      value: 0,
      currency: {
        meta: {
          href: 'https://online.moysklad.ru/api/remap/1.2/entity/currency/804d1de1-fc63-11ed-0a80-000d00187fd9',
          metadataHref:
            'https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata',
          type: 'currency',
          mediaType: 'application/json',
          uuidHref:
            'https://online.moysklad.ru/app/#currency/edit?id=804d1de1-fc63-11ed-0a80-000d00187fd9'
        }
      }
    },
    barcodes: [{ code128: 'СП00010' }],
    paymentItemType: 'GOOD',
    discountProhibited: false,
    weight: 0,
    volume: 0,
    variantsCount: 0,
    isSerialTrackable: false,
    trackingType: 'NOT_TRACKED',
    files: {
      meta: {
        href: 'https://online.moysklad.ru/api/remap/1.2/entity/product/f4f88966-fcb9-11ed-0a80-000f002cff0c/files',
        type: 'files',
        mediaType: 'application/json',
        size: 0,
        limit: 1000,
        offset: 0
      }
    },
    stock: 0,
    reserve: 0,
    inTransit: 0,
    quantity: 0,
    barcode: 'СП00010'
  }
])

const { mutate: sendMessage } = useMutation(gql`
  mutation ($NAME: String, $PR: Float, $PU: Float, $OS: Float, $GR: ID) {
    createProduct(
      data: {
        Name: $NAME
        Price: $PR
        purchasePrice: $PU
        Ostatki: $OS
        group: $GR
        Active: true
        UnitValue: 1
      }
    ) {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`)

async function startRun () {
  const res = []
  for (const item of data.value) {
    const d = {
      NAME: item.name,
      PR: item.salePrices[0].value / 100,
      PU: item.buyPrice ? item.buyPrice.value / 100 : 0,
      OS: item.stock,
      GR: item.pathName
    }
    res.push(d)
  }
  startRun2(res)
}
async function startRun2 (data2) {
  for (const item of data2) {
    await sendMessage({
      NAME: item.NAME,
      PR: parseFloat(item.PR),
      PU: parseFloat(item.PU),
      OS: parseFloat(item.OS),
      GR: item.GR
    })
  }
  console.log('Done!')
}
</script>

<style lang="scss" scoped></style>
