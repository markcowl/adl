
/**
 * @extensible
 * @since 2019-09-01
 */
export enum KeyPermissions {
    encrypt = 'encrypt',
    decrypt = 'decrypt',
    wrapKey = 'wrapKey',
    unwrapKey = 'unwrapKey',
    sign = 'sign',
    verify = 'verify',
    get = 'get',
    list = 'list',
    create = 'create',
    update = 'update',
    import = 'import',
    delete = 'delete',
    backup = 'backup',
    restore = 'restore',
    recover = 'recover',
    purge = 'purge'
}
