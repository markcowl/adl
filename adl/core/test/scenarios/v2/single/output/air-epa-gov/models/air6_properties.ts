
/**
 * 
 * @description GeoJSON Properties Object
 */
export interface air6_properties {
    /**
     * 
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     */
    AIR3yrComplQtrsHistory?: any;
    /**
     * 
     * @description Space-delimited list of AIR cases associated with the facility.
     */
    AIRCaseIDs?: any;
    /**
     * 
     * @description The city where the AIR facility is located.
     */
    AIRCity?: any;
    /**
     * 
     * @description The facility's recent violation status under the Clean Air Act.
     */
    AIRComplStatus?: any;
    /**
     * 
     * @description The name of the county where the AIR facility is located.
     */
    AIRCounty?: any;
    /**
     * 
     * @description The number of days since the most recent compliance evaluation of the facility.
     */
    AIRDaysLastEval?: any;
    /**
     * 
     * @description The EPA region where the AIR facility is located.
     */
    AIREPARegion?: any;
    /**
     * 
     * @description The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
     */
    AIREvalCnt?: any;
    /**
     * 
     * @description A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
     */
    AIRFIPSCode?: any;
    /**
     * 
     * @description A three-character code indicating if plant is government facility.
     * COR - Corporation
     * CNG - County Government
     * DIS - District
     * FDF - Federal Facility (U.S. Government)
     * GOC - GOCO (Gov Owned/Contractor Operated)
     * IND - Individual
     * MXO - Mixed Ownership (e.g., Public/Private)
     * MWD - Municipal or Water District
     * CTG	- Municipality
     * NON - Non-Government
     * POF - Privately Owned Facility
     * SDT - School District
     * STF - State Government
     * TRB - Tribal Government
     * UNK - Unknown
     */
    AIRFacilityTypeCode?: any;
    /**
     * 
     * @description The total number of formal enforcement actions taken against the facility within the last five years.
     */
    AIRFeaCnt?: any;
    /**
     * 
     * @description Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
     */
    AIRHpvStatus?: any;
    /**
     * 
     * @description Air Facility System (AFS) ID.
     */
    AIRIDs?: any;
    /**
     * 
     * @description The total number of informal enforcement actions taken against the facility within the last five years.
     */
    AIRIeaCnt?: any;
    /**
     * 
     * @description Flag indicating whether the AIR facility is located in Indian country.
     */
    AIRIndianCntryFlg?: any;
    /**
     * 
     * @description The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
     */
    AIRLastEvalDate?: any;
    /**
     * 
     * @description The last Air Inspection Date performed by EPA.
     */
    AIRLastEvalDateEPA?: any;
    /**
     * 
     * @description The last Air Inspection Date performed by State or local authorities.
     */
    AIRLastEvalDateState?: any;
    /**
     * 
     * @description The effective date of the most recent listed formal enforcement action taken against the facility.
     */
    AIRLastFeaDate?: any;
    /**
     * 
     * @description The last Air Formal Enforcement Action Date take by EPA.
     */
    AIRLastFeaDateEPA?: any;
    /**
     * 
     * @description The last Air Formal Enforcement Action Date take by State or Local authorities.
     */
    AIRLastFeaDateState?: any;
    /**
     * 
     * @description The effective date of the most recent listed informal enforcement action taken against the facility.
     */
    AIRLastIeaDate?: any;
    /**
     * 
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
     */
    AIRLastIeaDateEPA?: any;
    /**
     * 
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
     */
    AIRLastIeaDateState?: any;
    /**
     * 
     * @description Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
     */
    AIRLastPenaltyDate?: any;
    /**
     * 
     * @description The date on which the most recent stack test by EPA occurred.
     */
    AIRLastStckDateEPA?: any;
    /**
     * 
     * @description The date on which the most recent stack test by a state agency occurred.
     */
    AIRLastStckDateState?: any;
    /**
     * 
     * @description The date on which the most recent stack test occurred.
     */
    AIRLastStckTestDate?: any;
    /**
     * 
     * @description The result of the most recent stack test (Pass, Fail, Pending, or Blank).
     */
    AIRLastStckTestResults?: any;
    /**
     * 
     * @description The date on which the most recent violation was reported.
     */
    AIRLastViolDate?: any;
    /**
     * 
     * @description The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
     */
    AIRMacts?: any;
    /**
     * 
     * @description Indicated whether the facility is designated as a major facilitiy.
     */
    AIRMajorFlag?: any;
    /**
     * 
     * @description The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
     */
    AIRMnthsWithHpv?: any;
    /**
     * 
     * @description The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
     */
    AIRNAICS?: any;
    /**
     * 
     * @description The name of the AIR Facility.
     */
    AIRName?: any;
    /**
     * 
     * @description The New Source Performance Standards (NSPS) Subpart associated with the facility.
     */
    AIRNsps?: any;
    /**
     * 
     * @description The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
     */
    AIRNspsm?: any;
    /**
     * 
     * @description The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
     */
    AIRPenalties?: any;
    /**
     * 
     * @description The names of pollutants or pollutant categories with violations reported in the last year.
     */
    AIRPollRecentViol?: any;
    /**
     * 
     * @description Comma-delimited list of AIR programs.
     */
    AIRPrograms?: any;
    /**
     * 
     * @description The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
     */
    AIRQtrsWithHpv?: any;
    /**
     * 
     * @description The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
     */
    AIRQtrsWithViol?: any;
    /**
     * 
     * @description The number of violations reported in the last year.
     */
    AIRRecentViolCnt?: any;
    /**
     * 
     * @description The state where the AIR facility is located.
     */
    AIRState?: any;
    /**
     * 
     * @description The status of the AIR facility location.
     */
    AIRStatus?: any;
    /**
     * 
     * @description The street address of the AIR facility location.
     */
    AIRStreet?: any;
    /**
     * 
     * @description The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     */
    AIRTRIbalEPAids?: any;
    /**
     * 
     * @description The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     */
    AIRTRIbalNames?: any;
    /**
     * 
     * @description The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
     */
    AIRUniverse?: any;
    /**
     * 
     * @description The five-digit zip code of the AIR facility.
     */
    AIRZip?: any;
    /**
     * 
     * @description A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
     */
    ActiveLower48?: any;
    /**
     * 
     * @description A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
     */
    CWAIDs?: any;
    /**
     * 
     * @description Indicates the calculated accuracy in meters for the facilities geospatial coordinate.  Generally, the accuracy is directly linked to the collection method where GPS methods are more accurate that manual methods like map or photo interpolations.
     */
    CalculatedAccuracyMeters?: any;
    /**
     * 
     * @description Facility identifiers for the Clean Air Markets Division database.
     */
    CamdIDs?: any;
    /**
     * 
     * @description A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
     */
    CensusBlockGroup?: any;
    /**
     * 
     * @description Displays "Y" if the facility is located within the Chesapeake Bay watershed.
     */
    ChesapeakeBayFlag?: any;
    /**
     * 
     * @description ??
     */
    CollectionMethod?: any;
    /**
     * 
     * @description Indicates if the facility has a current significant violation. 1 = Yes
     */
    CurrSvFlag?: any;
    /**
     * 
     * @description Indicates if the facility has a current violation. 1 = Yes
     */
    CurrVioFlag?: any;
    /**
     * 
     * @description The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report:
     *
     * - AFS: Air Facility System for Clean Air Act stationary source programs.
     * - ICP: Integrated Compliance Information System for Clean Water Act programs monitoring National Pollutant Discharge Elimination System (NPDES) permits.
     * - RCR: Resource Conservation and Recovery Act Information System (RCRAInfo) for tracking the Resource Conservation and Recovery Act (RCRA) programs.
     * - NCDB: National Compliance Database System for monitoring national performance of the Toxic Substance Control Act (TSCA); the Emergency Planning and Right-to-Know Act, Section 313 (EPCRA); the Asbestos Hazard Emergency Response (AHERA); and the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA).
     * - TRI: Toxics Release Inventory for Emergency Planning and Community Right-to-Know Act, Section 313 submissions.
     * - NEI: National Emissions Inventory database contains information on stationary and mobile sources that emit criteria air pollutants and their precursors, as well as hazardous air pollutants (HAPs). The database includes estimates of annual emissions, by source, of air pollutants in each area of the country, on an annual basis.
     * - TSCA: Toxic Substances Control Act addressing the production, importation, use, and disposal of specific chemicals.
     */
    EPASystem?: any;
    /**
     * 
     * @description Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
     */
    Ea5yrFlag?: any;
    /**
     * 
     * @description A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
     */
    EisIDs?: any;
    /**
     * 
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     */
    EjscreenFlag?: any;
    /**
     * 
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     */
    EjscreenFlagUs?: any;
    /**
     * 
     * @description Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
     */
    FacCamdReporter?: any;
    /**
     * 
     * @description The facility county name from EPA's Facility Registry System
     */
    FacCountyName?: any;
    /**
     * 
     * @description The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
     */
    FacDerivedHuc?: any;
    /**
     * 
     * @description The tribes or tribal territories located within 25 miles of the facility's location.
     */
    FacDerivedTRIbes?: any;
    /**
     * 
     * @description The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
     */
    FacDerivedWBD?: any;
    /**
     * 
     * @description The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
     */
    FacDerivedWBDName?: any;
    /**
     * 
     * @description The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
     */
    FacEisAIRReleases?: any;
    /**
     * 
     * @description Indicates whether the facility reports to the Emissions Inventory System (EIS).
     */
    FacEisReporter?: any;
    /**
     * 
     * @description The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
     */
    FacFIPSCode?: any;
    /**
     * 
     * @description Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
     */
    FacFederalAgencyCode?: any;
    /**
     * 
     * @description Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
     */
    FacFederalAgencyName?: any;
    /**
     * 
     * @description The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
     */
    FacGHGCO2Releases?: any;
    /**
     * 
     * @description Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
     */
    FacGHGReporter?: any;
    /**
     * 
     * @description Flag showing Y/N whether the facility is located in Indian Country.
     */
    FacIndianCntryFlg?: any;
    /**
     * 
     * @description Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
     */
    FacIndianSpatialFlg?: any;
    /**
     * 
     * @description Graphical indicator denoting whether geographical data required to map a facility are available.
     */
    FacMapFlg?: any;
    /**
     * 
     * @description The default map icon image file calculated for the facility by the ECHO program.
     */
    FacMapIcon?: any;
    /**
     * 
     * @description Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
     */
    FacNaaFlag?: any;
    /**
     * 
     * @description Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
     */
    FacPercentMinority?: any;
    /**
     * 
     * @description The number of persons per square mile in the profiled area.
     */
    FacPopulationDensity?: any;
    /**
     * 
     * @description Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
     */
    FacSICCodes?: any;
    /**
     * 
     * @description The standardized  facility county name from EPA's Facility Registry System
     */
    FacStdCountyName?: any;
    /**
     * 
     * @description The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
     */
    FacTRIAIRReleases?: any;
    /**
     * 
     * @description The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
     */
    FacTRICarcAIRReleases?: any;
    /**
     * 
     * @description The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
     */
    FacTRIHapsReleases?: any;
    /**
     * 
     * @description Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
     */
    FacTRIReporter?: any;
    /**
     * 
     * @description A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
     */
    FacUsMexBorderFlg?: any;
    /**
     * 
     * @description A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
     */
    GHGIDs?: any;
    /**
     * 
     * @description ???
     */
    HasPollRpt?: any;
    /**
     * 
     * @description Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
     */
    Infea5yrFlag?: any;
    /**
     * 
     * @description Indicates if the facility has an inspection within the last 5 years. 1 = Yes
     */
    Insp5yrFlag?: any;
    /**
     * 
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
     */
    LastDatePce?: any;
    /**
     * 
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
     */
    LastDatePceEPA?: any;
    /**
     * 
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
     */
    LastDatePceSta?: any;
    /**
     * 
     * @description Code for regions within a state. Search criteria for DFR in OTIS.
     */
    LocalControlRegionCode?: any;
    /**
     * 
     * @description Regions within a state. Search criteria for DFR in OTIS.
     */
    LocalControlRegionName?: any;
    /**
     * 
     * @description Flag showing Y/N whether location is within the contiguous (lower 48) United States.
     */
    Lower48?: any;
    /**
     * 
     * @description No Longer Used.
     */
    Map?: any;
    /**
     * 
     * @description The maximum percentile from all individual EJSCREEN indicators.
     */
    MaxPctileUs?: any;
    /**
     * 
     * @description [Col. 121]
     */
    MaxScore?: any;
    /**
     * 
     * @description The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.
     */
    NaaCategories?: any;
    /**
     * 
     * @description All criteria pollutants that the facility is in nonattainment for.
     */
    NaaPollutants?: any;
    /**
     * 
     * @description The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
     */
    Over80CountUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
     */
    PctileCancerUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
     */
    PctileDpmUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN ozone indicator.
     */
    PctileO3Us?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN Lead paint indicator.
     */
    PctilePctpre1960Us?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN particulate matter indicator.
     */
    PctilePmUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
     */
    PctileProximityNPDESUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
     */
    PctileProximityNplUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
     */
    PctileProximityRmpUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
     */
    PctileProximityTsdfUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
     */
    PctileRespUs?: any;
    /**
     * 
     * @description The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
     */
    PctileTrafficScoreUs?: any;
    /**
     * 
     * @description A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
     */
    RCRAIDs?: any;
    /**
     * 
     * @description ??
     */
    ReferencePoint?: any;
    /**
     * 
     * @description An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
     */
    RegistryID?: any;
    /**
     * 
     * @description A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
     */
    RmpIDs?: any;
    /**
     * 
     * @description A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
     */
    SDWAIDs?: any;
    Score?: any;
    /**
     * 
     * @description Unique Identifier assigned by EPA.
     */
    SourceID?: any;
    /**
     * 
     * @description The name of the statute associated with each of the permits and identifiers linked to the facility:
     * - CAA = the Clean Air Act
     * - CWA = the Clean Water Act
     * - RCRA = the Resource Conservation and Recovery Act
     * - EP313 = the Emergency Planning and Community Right-to-Know Act, Section 313 (also known as the Toxics Release Inventory Program)
     * - TSCA = the Toxic Substances Control Act
     * - SDWA = the Safe Drinking Water Act
     */
    Statute?: any;
    /**
     * 
     * @description A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
     */
    TRIIDs?: any;
    /**
     * 
     * @description A value of "1" indicates that the facility is within an Indian Tribal or Alaskan Native Village area.
     */
    TRIbalFlag?: any;
    /**
     * 
     * @description Indicates if the facility had a violation within the last 3 years. 1 = Yes
     */
    ViolFlag?: any;
    /**
     * 
     * @description Contains flags that identify what web accessible documents are available for the facility.
     */
    WebDocs?: any;
}
