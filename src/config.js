export const SANDBOX_BASE_URL = 'https://api.sandbox.checkout.com';
export const LIVE_BASE_URL = 'https://api.checkout.com';
export const SANDBOX_ACCESS_URL = 'https://access.sandbox.checkout.com/connect/token';
export const LIVE_ACCESS_URL = 'https://access.checkout.com/connect/token';
export const MARKETPLACE_FILES_LIVE_URL = 'https://files.checkout.com';
export const MARKETPLACE_FILES_SANDBOX_URL = 'https://files.sandbox.checkout.com';

export const TRANSFERS_SANDBOX_URL = 'https://transfers.sandbox.checkout.com/transfers';
export const TRANSFERS_LIVE_URL = 'https://transfers.checkout.com/transfers';

export const REQUEST_ID_HEADER = 'cko-request-id';
export const API_VERSION_HEADER = 'cko-version';

export const DEFAULT_TIMEOUT = 15000;

export const MBC_LIVE_SECRET_KEY_REGEX = /^sk_?(\w{8})-(\w{4})-(\w{4})-(\w{4})-(\w{12})$/;
export const NAS_LIVE_SECRET_KEY_REGEX = /^sk_?[a-z2-7]{26}[a-z2-7*#$=]$/;
export const NAS_SANDBOX_SECRET_KEY_REGEX = /^sk_sbox_?[a-z2-7]{26}[a-z2-7*#$=]$/;
export const NAS_LIVE_PUBLIC_KEY_REGEX = /^pk_?[a-z2-7]{26}[a-z2-7*#$=]$/;
export const NAS_SANDBOX_PUBLIC_KEY_REGEX = /^pk_sbox_?[a-z2-7]{26}[a-z2-7*#$=]$/;
export const PAYMENT_TYPES = {
    regular: 'Regular',
    recurring: 'Recurring',
    moto: 'MOTO',
};
export const CURRENCIES = {
    ALL: 'ALL',
    STN: 'STN',
    EEK: 'EEK',
    BHD: 'BHD',
    SCR: 'SCR',
    DJF: 'DJF',
    EGP: 'EGP',
    MDL: 'MDL',
    MZN: 'MZN',
    BND: 'BND',
    ZMK: 'ZMK',
    SHP: 'SHP',
    LBP: 'LBP',
    AWG: 'AWG',
    JMD: 'JMD',
    KES: 'KES',
    BYN: 'BYN',
    KHR: 'KHR',
    LAK: 'LAK',
    MVR: 'MVR',
    AOA: 'AOA',
    TJS: 'TJS',
    SVC: 'SVC',
    GNF: 'GNF',
    BRL: 'BRL',
    MOP: 'MOP',
    BOB: 'BOB',
    CDF: 'CDF',
    NAD: 'NAD',
    LYD: 'LYD',
    VUV: 'VUV',
    QAR: 'QAR',
    CLP: 'CLP',
    HRK: 'HRK',
    ISK: 'ISK',
    FKP: 'FKP',
    XCD: 'XCD',
    NOK: 'NOK',
    CUP: 'CUP',
    VND: 'VND',
    PEN: 'PEN',
    KMF: 'KMF',
    LVL: 'LVL',
    MMK: 'MMK',
    TRY: 'TRY',
    VEF: 'VEF',
    AUD: 'AUD',
    TWD: 'TWD',
    PKR: 'PKR',
    SLL: 'SLL',
    BGN: 'BGN',
    LRD: 'LRD',
    LKR: 'LKR',
    XAF: 'XAF',
    JOD: 'JOD',
    ANG: 'ANG',
    BSD: 'BSD',
    CAD: 'CAD',
    GIP: 'GIP',
    MNT: 'MNT',
    LTL: 'LTL',
    BBD: 'BBD',
    CLF: 'CLF',
    BWP: 'BWP',
    COP: 'COP',
    PHP: 'PHP',
    HUF: 'HUF',
    FJD: 'FJD',
    MWK: 'MWK',
    THB: 'THB',
    XPF: 'XPF',
    RSD: 'RSD',
    SAR: 'SAR',
    UYU: 'UYU',
    BZD: 'BZD',
    SYP: 'SYP',
    GMD: 'GMD',
    SZL: 'SZL',
    SBD: 'SBD',
    ETB: 'ETB',
    CHF: 'CHF',
    MXN: 'MXN',
    ARS: 'ARS',
    GTQ: 'GTQ',
    GHS: 'GHS',
    NIO: 'NIO',
    JPY: 'JPY',
    BDT: 'BDT',
    UZS: 'UZS',
    SOS: 'SOS',
    BTN: 'BTN',
    NZD: 'NZD',
    TZS: 'TZS',
    IQD: 'IQD',
    MGA: 'MGA',
    DZD: 'DZD',
    GYD: 'GYD',
    USD: 'USD',
    KWD: 'KWD',
    CNY: 'CNY',
    PYG: 'PYG',
    SGD: 'SGD',
    KZT: 'KZT',
    PGK: 'PGK',
    AMD: 'AMD',
    GBP: 'GBP',
    AFN: 'AFN',
    CRC: 'CRC',
    XOF: 'XOF',
    YER: 'YER',
    MRU: 'MRU',
    DKK: 'DKK',
    TOP: 'TOP',
    INR: 'INR',
    SDG: 'SDG',
    DOP: 'DOP',
    ZWL: 'ZWL',
    UGX: 'UGX',
    SEK: 'SEK',
    LSL: 'LSL',
    MYR: 'MYR',
    TMT: 'TMT',
    OMR: 'OMR',
    BMD: 'BMD',
    KRW: 'KRW',
    HKD: 'HKD',
    KGS: 'KGS',
    BAM: 'BAM',
    NGN: 'NGN',
    ILS: 'ILS',
    MUR: 'MUR',
    RON: 'RON',
    TND: 'TND',
    AED: 'AED',
    PAB: 'PAB',
    NPR: 'NPR',
    TTD: 'TTD',
    RWF: 'RWF',
    HTG: 'HTG',
    IDR: 'IDR',
    EUR: 'EUR',
    KYD: 'KYD',
    IRR: 'IRR',
    KPW: 'KPW',
    MKD: 'MKD',
    SRD: 'SRD',
    HNL: 'HNL',
    AZN: 'AZN',
    ERN: 'ERN',
    CZK: 'CZK',
    CVE: 'CVE',
    BIF: 'BIF',
    MAD: 'MAD',
    RUB: 'RUB',
    UAH: 'UAH',
    WST: 'WST',
    PLN: 'PLN',
    ZAR: 'ZAR',
    GEL: 'GEL',
    ZMW: 'ZMW',
};
