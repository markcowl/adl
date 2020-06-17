export interface Service {
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @since 0.0.0
     * @http GET /air_rest_services.get_download
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_download'(output?: Query<string>, qid: q_qid, qcolumns?: q_qcolumns, p_pretty_print?: q_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Download Data Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.
     * @since 0.0.0
     * @http POST /air_rest_services.get_download
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_download'(output?: FormData<string>, qid: f_qid, qcolumns?: f_qcolumns, p_pretty_print?: f_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @since 0.0.0
     * @http GET /air_rest_services.get_facilities
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are summary statistics for the query and a query identifier (QID).
     * @return 200|application/xml - Results are summary statistics for the query and a query identifier (QID).
     */
    'air_rest_services.get_facilities'(output?: Query<"JSONP" | "JSON" | "XML">, p_fn?: q_p_fn, p_sa?: q_p_sa, p_sa1?: q_p_sa1, p_ct?: q_p_ct, p_co?: q_p_co, p_fips?: q_p_fips, p_st?: q_p_st, p_zip?: q_p_zip, p_lcon?: q_p_lcon, p_frs?: q_p_frs, p_reg?: q_p_reg, p_sic?: q_p_sic, p_ncs?: q_p_ncs, p_qnc?: q_p_qnc, p_pen?: q_p_pen, p_opst?: q_p_opst, p_c1lat?: q_p_c1lat, p_c1lon?: q_p_c1lon, p_c2lat?: q_p_c2lat, p_c2lon?: q_p_c2lon, p_usmex?: q_p_usmex, p_sic2?: q_p_sic2, p_sic4?: q_p_sic4, p_fa?: q_p_fa, p_act?: q_p_act, p_maj?: q_p_maj, p_mact?: q_p_mact, p_nsps?: q_p_nsps, p_nspsm?: q_p_nspsm, p_prog?: q_p_prog, p_fea?: q_p_fea, p_feay?: q_p_feay, p_feaa?: q_p_feaa, p_iea?: q_p_iea, p_ieay?: q_p_ieay, p_ieaa?: q_p_ieaa, p_qiv?: q_p_qiv, p_naa?: q_p_naa, p_impw?: q_p_impw, p_trep?: q_p_trep, p_tri_cat?: q_p_tri_cat, p_tri_amt?: q_p_tri_amt, p_tri_any_amt?: q_p_tri_any_amt, p_tri_pol?: q_p_tri_pol, p_ghg_cat?: q_p_ghg_cat, p_ghg_amt?: q_p_ghg_amt, p_ghg_any_amt?: q_p_ghg_any_amt, p_ghg_yr?: q_p_ghg_yr, p_nei_pol?: q_p_nei_pol, p_nei_amt?: q_p_nei_amt, p_nei_any_amt?: q_p_nei_any_amt, p_nei_yr?: q_p_nei_yr, p_nei_cat?: q_p_nei_cat, p_pm?: q_p_pm, p_pd?: q_p_pd, p_ico?: q_p_ico, p_huc?: q_p_huc, p_wbd?: q_p_wbd, p_pid?: q_p_pid, p_med?: q_p_med, p_ysl?: q_p_ysl, p_ysly?: q_p_ysly, p_ysla?: q_p_ysla, p_stsl?: q_p_stsl, p_stsly?: q_p_stsly, p_stsla?: q_p_stsla, p_stres?: q_p_stres, p_sttyp?: q_p_sttyp, p_qs?: q_p_qs, p_sfs?: q_p_sfs, p_tribeid?: q_p_tribeid, p_tribename?: q_p_tribename, p_tribedist?: q_p_tribedist, p_owop?: q_p_owop, p_agoo?: q_p_agoo, p_idt1?: q_p_idt1, p_idt2?: q_p_idt2, p_stdt1?: q_p_stdt1, p_stdt2?: q_p_stdt2, p_pityp?: q_p_pityp, p_cifdi?: q_p_cifdi, p_pfead1?: q_p_pfead1, p_pfead2?: q_p_pfead2, p_pfeat?: q_p_pfeat, p_psncq?: q_p_psncq, p_pctrack?: q_p_pctrack, p_swpa?: q_p_swpa, p_des?: q_p_des, p_fntype?: q_p_fntype, p_hpvmth?: q_p_hpvmth, p_recvio?: q_p_recvio, p_pollvio?: q_p_pollvio, p_ar?: q_p_ar, p_tri_yr?: q_p_tri_yr, p_pidall?: q_p_pidall, p_fac_ico?: q_p_fac_ico, p_icoo?: q_p_icoo, p_fac_icos?: q_p_fac_icos, p_ejscreen?: q_p_ejscreen, p_limit_addr?: q_p_limit_addr, p_lat?: q_p_lat, p_long?: q_p_long, p_radius?: q_p_radius, p_decouple?: q_p_decouple, p_ejscreen_over80cnt?: q_p_ejscreen_over80cnt, queryset?: q_queryset, responseset?: q_responseset, tablelist?: q_tablelist, maplist?: q_maplist, summarylist?: q_summarylist, callback?: q_callback, qcolumns?: q_qcolumns, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }];
    /**
     * Clean Air Act Facility Search
     * @description Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size
     * @since 0.0.0
     * @http POST /air_rest_services.get_facilities
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are summary statistics for the query and a query identifier (QID).
     * @return 200|application/xml - Results are summary statistics for the query and a query identifier (QID).
     */
    'air_rest_services.get_facilities'(output?: FormData<"JSONP" | "JSON" | "XML">, p_fn?: f_p_fn, p_sa?: f_p_sa, p_sa1?: f_p_sa1, p_ct?: f_p_ct, p_co?: f_p_co, p_fips?: f_p_fips, p_st?: f_p_st, p_zip?: f_p_zip, p_lcon?: f_p_lcon, p_frs?: f_p_frs, p_reg?: f_p_reg, p_sic?: f_p_sic, p_ncs?: f_p_ncs, p_qnc?: f_p_qnc, p_pen?: f_p_pen, p_opst?: f_p_opst, p_c1lat?: f_p_c1lat, p_c1lon?: f_p_c1lon, p_c2lat?: f_p_c2lat, p_c2lon?: f_p_c2lon, p_usmex?: f_p_usmex, p_sic2?: f_p_sic2, p_sic4?: f_p_sic4, p_fa?: f_p_fa, p_act?: f_p_act, p_maj?: f_p_maj, p_mact?: f_p_mact, p_nsps?: f_p_nsps, p_nspsm?: f_p_nspsm, p_prog?: f_p_prog, p_fea?: f_p_fea, p_feay?: f_p_feay, p_feaa?: f_p_feaa, p_iea?: f_p_iea, p_ieay?: f_p_ieay, p_ieaa?: f_p_ieaa, p_qiv?: f_p_qiv, p_naa?: f_p_naa, p_impw?: f_p_impw, p_trep?: f_p_trep, p_tri_cat?: f_p_tri_cat, p_tri_amt?: f_p_tri_amt, p_tri_any_amt?: f_p_tri_any_amt, p_tri_pol?: f_p_tri_pol, p_ghg_cat?: f_p_ghg_cat, p_ghg_amt?: f_p_ghg_amt, p_ghg_any_amt?: f_p_ghg_any_amt, p_ghg_yr?: f_p_ghg_yr, p_nei_pol?: f_p_nei_pol, p_nei_amt?: f_p_nei_amt, p_nei_any_amt?: f_p_nei_any_amt, p_nei_yr?: f_p_nei_yr, p_nei_cat?: f_p_nei_cat, p_pm?: f_p_pm, p_pd?: f_p_pd, p_ico?: f_p_ico, p_huc?: f_p_huc, p_wbd?: f_p_wbd, p_pid?: f_p_pid, p_med?: f_p_med, p_ysl?: f_p_ysl, p_ysly?: f_p_ysly, p_ysla?: f_p_ysla, p_stsl?: f_p_stsl, p_stsly?: f_p_stsly, p_stsla?: f_p_stsla, p_stres?: f_p_stres, p_sttyp?: f_p_sttyp, p_qs?: f_p_qs, p_sfs?: f_p_sfs, p_tribeid?: f_p_tribeid, p_tribename?: f_p_tribename, p_tribedist?: f_p_tribedist, p_owop?: f_p_owop, p_agoo?: f_p_agoo, p_idt1?: f_p_idt1, p_idt2?: f_p_idt2, p_stdt1?: f_p_stdt1, p_stdt2?: f_p_stdt2, p_pityp?: f_p_pityp, p_cifdi?: f_p_cifdi, p_pfead1?: f_p_pfead1, p_pfead2?: f_p_pfead2, p_pfeat?: f_p_pfeat, p_psncq?: f_p_psncq, p_pctrack?: f_p_pctrack, p_swpa?: f_p_swpa, p_des?: f_p_des, p_fntype?: f_p_fntype, p_hpvmth?: f_p_hpvmth, p_recvio?: f_p_recvio, p_pollvio?: f_p_pollvio, p_ar?: f_p_ar, p_tri_yr?: f_p_tri_yr, p_pidall?: f_p_pidall, p_fac_ico?: f_p_fac_ico, p_icoo?: f_p_icoo, p_fac_icos?: f_p_fac_icos, p_ejscreen?: f_p_ejscreen, p_limit_addr?: f_p_limit_addr, p_lat?: f_p_lat, p_long?: f_p_long, p_radius?: f_p_radius, p_decouple?: f_p_decouple, p_ejscreen_over80cnt?: f_p_ejscreen_over80cnt, queryset?: f_queryset, responseset?: f_responseset, tablelist?: f_tablelist, maplist?: f_maplist, summarylist?: f_summarylist, callback?: f_callback, qcolumns?: f_qcolumns, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air2_Results;
        };
    }];
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @since 0.0.0
     * @http GET /air_rest_services.get_facility_info
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * - CSV = Facility results formatted as comma delimited file download.
     * - GEOJSON = Facility results formatted as GeoJSON feature collection.
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     * @return 200|application/xml - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     */
    'air_rest_services.get_facility_info'(output?: Query<string>, p_fn?: q_p_fn, p_sa?: q_p_sa, p_sa1?: q_p_sa1, p_ct?: q_p_ct, p_co?: q_p_co, p_fips?: q_p_fips, p_st?: q_p_st, p_zip?: q_p_zip, p_lcon?: q_p_lcon, p_frs?: q_p_frs, p_reg?: q_p_reg, p_sic?: q_p_sic, p_ncs?: q_p_ncs, p_qnc?: q_p_qnc, p_pen?: q_p_pen, p_opst?: q_p_opst, xmin?: q_xmin, ymin?: q_ymin, xmax?: q_xmax, ymax?: q_ymax, p_usmex?: q_p_usmex, p_sic2?: q_p_sic2, p_sic4?: q_p_sic4, p_fa?: q_p_fa, p_act?: q_p_act, p_maj?: q_p_maj, p_mact?: q_p_mact, p_nsps?: q_p_nsps, p_nspsm?: q_p_nspsm, p_prog?: q_p_prog, p_fea?: q_p_fea, p_feay?: q_p_feay, p_feaa?: q_p_feaa, p_iea?: q_p_iea, p_ieay?: q_p_ieay, p_ieaa?: q_p_ieaa, p_qiv?: q_p_qiv, p_naa?: q_p_naa, p_impw?: q_p_impw, p_trep?: q_p_trep, p_tri_cat?: q_p_tri_cat, p_tri_amt?: q_p_tri_amt, p_tri_any_amt?: q_p_tri_any_amt, p_tri_pol?: q_p_tri_pol, p_ghg_cat?: q_p_ghg_cat, p_ghg_amt?: q_p_ghg_amt, p_ghg_any_amt?: q_p_ghg_any_amt, p_ghg_yr?: q_p_ghg_yr, p_nei_pol?: q_p_nei_pol, p_nei_amt?: q_p_nei_amt, p_nei_any_amt?: q_p_nei_any_amt, p_nei_yr?: q_p_nei_yr, p_nei_cat?: q_p_nei_cat, p_pm?: q_p_pm, p_pd?: q_p_pd, p_ico?: q_p_ico, p_huc?: q_p_huc, p_wbd?: q_p_wbd, p_pid?: q_p_pid, p_med?: q_p_med, p_ysl?: q_p_ysl, p_ysly?: q_p_ysly, p_ysla?: q_p_ysla, p_stsl?: q_p_stsl, p_stsly?: q_p_stsly, p_stsla?: q_p_stsla, p_stres?: q_p_stres, p_sttyp?: q_p_sttyp, p_qs?: q_p_qs, p_sfs?: q_p_sfs, p_tribeid?: q_p_tribeid, p_tribename?: q_p_tribename, p_tribedist?: q_p_tribedist, p_owop?: q_p_owop, p_agoo?: q_p_agoo, p_idt1?: q_p_idt1, p_idt2?: q_p_idt2, p_stdt1?: q_p_stdt1, p_stdt2?: q_p_stdt2, p_pityp?: q_p_pityp, p_cifdi?: q_p_cifdi, p_pfead1?: q_p_pfead1, p_pfead2?: q_p_pfead2, p_pfeat?: q_p_pfeat, p_psncq?: q_p_psncq, p_pctrack?: q_p_pctrack, p_swpa?: q_p_swpa, p_des?: q_p_des, p_fntype?: q_p_fntype, p_hpvmth?: q_p_hpvmth, p_recvio?: q_p_recvio, p_pollvio?: q_p_pollvio, p_ar?: q_p_ar, p_tri_yr?: q_p_tri_yr, p_pidall?: q_p_pidall, p_fac_ico?: q_p_fac_ico, p_icoo?: q_p_icoo, p_fac_icos?: q_p_fac_icos, p_ejscreen?: q_p_ejscreen, p_limit_addr?: q_p_limit_addr, p_lat?: q_p_lat, p_long?: q_p_long, p_radius?: q_p_radius, p_decouple?: q_p_decouple, p_ejscreen_over80cnt?: q_p_ejscreen_over80cnt, queryset?: q_queryset, responseset?: q_responseset, summarylist?: q_summarylist, callback?: q_callback, qcolumns?: q_qcolumns, p_pretty_print?: q_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }];
    /**
     * Clean Air Act Facility Enhanced Search
     * @description Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.
     * @since 0.0.0
     * @http POST /air_rest_services.get_facility_info
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * - CSV = Facility results formatted as comma delimited file download.
     * - GEOJSON = Facility results formatted as GeoJSON feature collection.
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     * @return 200|application/xml - Results will either be an array of Facilities or an array of Clusters. The search will return clusters if the number of facilities returned is greater than the resposeset size, otherwise individual facility records will be returned.
     */
    'air_rest_services.get_facility_info'(output?: FormData<string>, p_fn?: f_p_fn, p_sa?: f_p_sa, p_sa1?: f_p_sa1, p_ct?: f_p_ct, p_co?: f_p_co, p_fips?: f_p_fips, p_st?: f_p_st, p_zip?: f_p_zip, p_lcon?: f_p_lcon, p_frs?: f_p_frs, p_reg?: f_p_reg, p_sic?: f_p_sic, p_ncs?: f_p_ncs, p_qnc?: f_p_qnc, p_pen?: f_p_pen, p_opst?: f_p_opst, xmin?: f_xmin, ymin?: f_ymin, xmax?: f_xmax, ymax?: f_ymax, p_usmex?: f_p_usmex, p_sic2?: f_p_sic2, p_sic4?: f_p_sic4, p_fa?: f_p_fa, p_act?: f_p_act, p_maj?: f_p_maj, p_mact?: f_p_mact, p_nsps?: f_p_nsps, p_nspsm?: f_p_nspsm, p_prog?: f_p_prog, p_fea?: f_p_fea, p_feay?: f_p_feay, p_feaa?: f_p_feaa, p_iea?: f_p_iea, p_ieay?: f_p_ieay, p_ieaa?: f_p_ieaa, p_qiv?: f_p_qiv, p_naa?: f_p_naa, p_impw?: f_p_impw, p_trep?: f_p_trep, p_tri_cat?: f_p_tri_cat, p_tri_amt?: f_p_tri_amt, p_tri_any_amt?: f_p_tri_any_amt, p_tri_pol?: f_p_tri_pol, p_ghg_cat?: f_p_ghg_cat, p_ghg_amt?: f_p_ghg_amt, p_ghg_any_amt?: f_p_ghg_any_amt, p_ghg_yr?: f_p_ghg_yr, p_nei_pol?: f_p_nei_pol, p_nei_amt?: f_p_nei_amt, p_nei_any_amt?: f_p_nei_any_amt, p_nei_yr?: f_p_nei_yr, p_nei_cat?: f_p_nei_cat, p_pm?: f_p_pm, p_pd?: f_p_pd, p_ico?: f_p_ico, p_huc?: f_p_huc, p_wbd?: f_p_wbd, p_pid?: f_p_pid, p_med?: f_p_med, p_ysl?: f_p_ysl, p_ysly?: f_p_ysly, p_ysla?: f_p_ysla, p_stsl?: f_p_stsl, p_stsly?: f_p_stsly, p_stsla?: f_p_stsla, p_stres?: f_p_stres, p_sttyp?: f_p_sttyp, p_qs?: f_p_qs, p_sfs?: f_p_sfs, p_tribeid?: f_p_tribeid, p_tribename?: f_p_tribename, p_tribedist?: f_p_tribedist, p_owop?: f_p_owop, p_agoo?: f_p_agoo, p_idt1?: f_p_idt1, p_idt2?: f_p_idt2, p_stdt1?: f_p_stdt1, p_stdt2?: f_p_stdt2, p_pityp?: f_p_pityp, p_cifdi?: f_p_cifdi, p_pfead1?: f_p_pfead1, p_pfead2?: f_p_pfead2, p_pfeat?: f_p_pfeat, p_psncq?: f_p_psncq, p_pctrack?: f_p_pctrack, p_swpa?: f_p_swpa, p_des?: f_p_des, p_fntype?: f_p_fntype, p_hpvmth?: f_p_hpvmth, p_recvio?: f_p_recvio, p_pollvio?: f_p_pollvio, p_ar?: f_p_ar, p_tri_yr?: f_p_tri_yr, p_pidall?: f_p_pidall, p_fac_ico?: f_p_fac_ico, p_icoo?: f_p_icoo, p_fac_icos?: f_p_fac_icos, p_ejscreen?: f_p_ejscreen, p_limit_addr?: f_p_limit_addr, p_lat?: f_p_lat, p_long?: f_p_long, p_radius?: f_p_radius, p_decouple?: f_p_decouple, p_ejscreen_over80cnt?: f_p_ejscreen_over80cnt, queryset?: f_queryset, responseset?: f_responseset, summarylist?: f_summarylist, callback?: f_callback, qcolumns?: f_qcolumns, p_pretty_print?: f_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air3_Results;
        };
    }];
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @since 0.0.0
     * @http GET /air_rest_services.get_geojson
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - GEOJSON = Facility results formatted as GeoJSON feature collection (default).
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are formatted as a GeoJSON feature collection.
     * @return 200|application/xml - Results are formatted as a GeoJSON feature collection.
     */
    'air_rest_services.get_geojson'(output?: Query<string>, qid: q_qid, callback?: q_callback, newsort?: q_newsort, descending?: q_descending, qcolumns?: q_qcolumns, p_pretty_print?: q_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }];
    /**
     * Clean Air Act GeoJSON Service
     * @description Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.
     * @since 0.0.0
     * @http POST /air_rest_services.get_geojson
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - GEOJSON = Facility results formatted as GeoJSON feature collection (default).
     * - GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are formatted as a GeoJSON feature collection.
     * @return 200|application/xml - Results are formatted as a GeoJSON feature collection.
     */
    'air_rest_services.get_geojson'(output?: FormData<string>, qid: f_qid, callback?: f_callback, newsort?: f_newsort, descending?: f_descending, qcolumns?: f_qcolumns, p_pretty_print?: f_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             * Features Array
             * @description Array of features in the feature collection.
             * @since 0.0.0
             */
            features: Array<air6_Feature>;
            /**
             * Feature Collection
             * @description Static marker indicating object is a GeoJSON Feature Collection.
             * @since 0.0.0
             */
            type: string;
        };
    }];
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @since 0.0.0
     * @http GET /air_rest_services.get_info_clusters
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_info_clusters'(output?: Query<string>, p_qid: q_p_qid, p_pretty_print?: q_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Info Clusters Service
     * @description Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.
     * @since 0.0.0
     * @http POST /air_rest_services.get_info_clusters
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - CSV = Facility results formatted as comma delimited file download (default).
     * - GEOJSOND = Facility results formatted as GeoJSON feature collection download.
     * @return 200|application/json - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     * @return 200|application/xml - Results are a comma separated value (CSV) file or a file containing a GeoJSON feature collection.
     */
    'air_rest_services.get_info_clusters'(output?: FormData<string>, p_qid: f_p_qid, p_pretty_print?: f_p_pretty_print, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: file;
    }, (code: 200, mediaType: "application/xml") => {
        body: file;
    }];
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @since 0.0.0
     * @http GET /air_rest_services.get_map
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     * @return 200|application/xml - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     */
    'air_rest_services.get_map'(output?: Query<"JSONP" | "JSON" | "XML">, qid: q_qid, callback?: q_callback, tablelist?: q_tablelist, c1_lat?: q_c1_lat, c1_long?: q_c1_long, c2_lat?: q_c2_lat, c2_long?: q_c2_long, p_id: q_p_id, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }];
    /**
     * Clean Air Act Map Service
     * @description The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.
     * @since 0.0.0
     * @http POST /air_rest_services.get_map
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     * @return 200|application/xml - Results are either an array of State, County, Zip Code facility cluster map coordinates or individual facility coordinates.  Coordinates provided are in WGS84.
     */
    'air_rest_services.get_map'(output?: FormData<"JSONP" | "JSON" | "XML">, qid: f_qid, callback?: f_callback, tablelist?: f_tablelist, c1_lat?: f_c1_lat, c1_long?: f_c1_long, c2_lat?: f_c2_lat, c2_long?: f_c2_long, p_id: f_p_id, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            MapOutput: air4_MapOutput;
        };
    }];
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @since 0.0.0
     * @http GET /air_rest_services.get_qid
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     * @return 200|application/xml - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     */
    'air_rest_services.get_qid'(output?: Query<"JSONP" | "JSON" | "XML">, qid: q_qid, pageno?: q_pageno, callback?: q_callback, newsort?: q_newsort, descending?: q_descending, qcolumns?: q_qcolumns, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }];
    /**
     * Clean Air Act Search by Query ID
     * @description GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.
     * @since 0.0.0
     * @http POST /air_rest_services.get_qid
     * @tag Facilities
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     * @return 200|application/xml - Results are an array (page)  of CAA (ICIS Air) Facilities with the number of facilities equal to the responseset (page size).
     */
    'air_rest_services.get_qid'(output?: FormData<"JSONP" | "JSON" | "XML">, qid: f_qid, pageno?: f_pageno, callback?: f_callback, newsort?: f_newsort, descending?: f_descending, qcolumns?: f_qcolumns, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: air5_Results;
        };
    }];
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @since 0.0.0
     * @http GET /air_rest_services.metadata
     * @tag Metadata
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are an array of columns/objects.
     * @return 200|application/xml - Results are an array of columns/objects.
     */
    'air_rest_services.metadata'(output?: Query<"JSONP" | "JSON" | "XML">, callback?: q_callback, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }];
    /**
     * Clean Air Act Metadata Service
     * @description Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.
     * @since 0.0.0
     * @http POST /air_rest_services.metadata
     * @tag Metadata
     * @param output - Output Format Flag.  Enter one of the following keywords:
     * - JSON = Data model formatted as Javascript Object Notation (default).
     * - JSONP = Data model formatted as Javascript Object Notation with Padding.
     * - XML = Data model formatted as Extensible Markup Language.
     * @return 200|application/json - Results are an array of columns/objects.
     * @return 200|application/xml - Results are an array of columns/objects.
     */
    'air_rest_services.metadata'(output?: FormData<"JSONP" | "JSON" | "XML">, callback?: f_callback, body?: Body<file, 'application/x-www-form-urlencoded'>): [(code: 200, mediaType: "application/json") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }, (code: 200, mediaType: "application/xml") => {
        body: {
            /**
             *
             * @since 0.0.0
             */
            Results: met1;
        };
    }];
}
