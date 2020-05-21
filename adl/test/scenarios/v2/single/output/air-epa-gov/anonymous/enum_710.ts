
/**
 * @description Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
 */
export enum enum_710 {
    0 = '0',
    GT0 = 'GT0',
    GT1000 = 'GT1000',
    GT5000 = 'GT5000',
    GT10000 = 'GT10000',
    GT50000 = 'GT50000'
}
