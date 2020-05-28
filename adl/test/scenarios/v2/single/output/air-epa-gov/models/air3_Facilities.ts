
/**
 * @description Facilities Object
 * @since 0.0.0
 */
export interface air3_Facilities {
    /**
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     * @since 0.0.0
     */
    AIR3yrComplQtrsHistory?: string;
    /**
     * @description Space-delimited list of AIR cases associated with the facility.
     * @since 0.0.0
     */
    AIRCaseIDs?: string;
    /**
     * @description The city where the AIR facility is located.
     * @since 0.0.0
     */
    AIRCity?: string;
    /**
     * @description The facility's recent violation status under the Clean Air Act.
     * @since 0.0.0
     */
    AIRComplStatus?: string;
    /**
     * @description The name of the county where the AIR facility is located.
     * @since 0.0.0
     */
    AIRCounty?: string;
    /**
     * @description The number of days since the most recent compliance evaluation of the facility.
     * @since 0.0.0
     */
    AIRDaysLastEval?: string;
    /**
     * @description The EPA region where the AIR facility is located.
     * @since 0.0.0
     */
    AIREPARegion?: string;
    /**
     * @description The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
     * @since 0.0.0
     */
    AIREvalCnt?: string;
    /**
     * @description A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
     * @since 0.0.0
     */
    AIRFIPSCode?: string;
    /**
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
     * @since 0.0.0
     */
    AIRFacilityTypeCode?: string;
    /**
     * @description The total number of formal enforcement actions taken against the facility within the last five years.
     * @since 0.0.0
     */
    AIRFeaCnt?: string;
    /**
     * @description Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
     * @since 0.0.0
     */
    AIRHpvStatus?: string;
    /**
     * @description Air Facility System (AFS) ID.
     * @since 0.0.0
     */
    AIRIDs?: string;
    /**
     * @description The total number of informal enforcement actions taken against the facility within the last five years.
     * @since 0.0.0
     */
    AIRIeaCnt?: string;
    /**
     * @description Flag indicating whether the AIR facility is located in Indian country.
     * @since 0.0.0
     */
    AIRIndianCntryFlg?: string;
    /**
     * @description The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
     * @since 0.0.0
     */
    AIRLastEvalDate?: string;
    /**
     * @description The last Air Inspection Date performed by EPA.
     * @since 0.0.0
     */
    AIRLastEvalDateEPA?: string;
    /**
     * @description The last Air Inspection Date performed by State or local authorities.
     * @since 0.0.0
     */
    AIRLastEvalDateState?: string;
    /**
     * @description The effective date of the most recent listed formal enforcement action taken against the facility.
     * @since 0.0.0
     */
    AIRLastFeaDate?: string;
    /**
     * @description The last Air Formal Enforcement Action Date take by EPA.
     * @since 0.0.0
     */
    AIRLastFeaDateEPA?: string;
    /**
     * @description The last Air Formal Enforcement Action Date take by State or Local authorities.
     * @since 0.0.0
     */
    AIRLastFeaDateState?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility.
     * @since 0.0.0
     */
    AIRLastIeaDate?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
     * @since 0.0.0
     */
    AIRLastIeaDateEPA?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
     * @since 0.0.0
     */
    AIRLastIeaDateState?: string;
    /**
     * @description Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
     * @since 0.0.0
     */
    AIRLastPenaltyDate?: string;
    /**
     * @description The date on which the most recent stack test by EPA occurred.
     * @since 0.0.0
     */
    AIRLastStckDateEPA?: string;
    /**
     * @description The date on which the most recent stack test by a state agency occurred.
     * @since 0.0.0
     */
    AIRLastStckDateState?: string;
    /**
     * @description The date on which the most recent stack test occurred.
     * @since 0.0.0
     */
    AIRLastStckTestDate?: string;
    /**
     * @description The result of the most recent stack test (Pass, Fail, Pending, or Blank).
     * @since 0.0.0
     */
    AIRLastStckTestResults?: string;
    /**
     * @description The date on which the most recent violation was reported.
     * @since 0.0.0
     */
    AIRLastViolDate?: string;
    /**
     * @description The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRMacts?: string;
    /**
     * @description Indicated whether the facility is designated as a major facilitiy.
     * @since 0.0.0
     */
    AIRMajorFlag?: string;
    /**
     * @description The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
     * @since 0.0.0
     */
    AIRMnthsWithHpv?: string;
    /**
     * @description The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
     * @since 0.0.0
     */
    AIRNAICS?: string;
    /**
     * @description The name of the AIR Facility.
     * @since 0.0.0
     */
    AIRName?: string;
    /**
     * @description The New Source Performance Standards (NSPS) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRNsps?: string;
    /**
     * @description The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
     * @since 0.0.0
     */
    AIRNspsm?: string;
    /**
     * @description The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
     * @since 0.0.0
     */
    AIRPenalties?: string;
    /**
     * @description The names of pollutants or pollutant categories with violations reported in the last year.
     * @since 0.0.0
     */
    AIRPollRecentViol?: string;
    /**
     * @description Comma-delimited list of AIR programs.
     * @since 0.0.0
     */
    AIRPrograms?: string;
    /**
     * @description The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
     * @since 0.0.0
     */
    AIRQtrsWithHpv?: string;
    /**
     * @description The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
     * @since 0.0.0
     */
    AIRQtrsWithViol?: string;
    /**
     * @description The number of violations reported in the last year.
     * @since 0.0.0
     */
    AIRRecentViolCnt?: string;
    /**
     * @description The state where the AIR facility is located.
     * @since 0.0.0
     */
    AIRState?: string;
    /**
     * @description The status of the AIR facility location.
     * @since 0.0.0
     */
    AIRStatus?: string;
    /**
     * @description The street address of the AIR facility location.
     * @since 0.0.0
     */
    AIRStreet?: string;
    /**
     * @description The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     * @since 0.0.0
     */
    AIRTRIbalEPAids?: string;
    /**
     * @description The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     * @since 0.0.0
     */
    AIRTRIbalNames?: string;
    /**
     * @description The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
     * @since 0.0.0
     */
    AIRUniverse?: string;
    /**
     * @description The five-digit zip code of the AIR facility.
     * @since 0.0.0
     */
    AIRZip?: string;
    /**
     * @description A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
     * @since 0.0.0
     */
    ActiveLower48?: string;
    /**
     * @description A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
     * @since 0.0.0
     */
    CWAIDs?: string;
    /**
     * @description The estimated accuracy in Meters for the facility's geospatial coordinate.
     * @since 0.0.0
     */
    CalculatedAccuracyMeters?: string;
    /**
     * @description Facility identifiers for the Clean Air Markets Division database.
     * @since 0.0.0
     */
    CamdIDs?: string;
    /**
     * @description A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
     * @since 0.0.0
     */
    CensusBlockGroup?: string;
    /**
     * @description Displays "Y" if the facility is located within the Chesapeake Bay watershed.
     * @since 0.0.0
     */
    ChesapeakeBayFlag?: string;
    /**
     * @description ??
     * @since 0.0.0
     */
    CollectionMethod?: string;
    /**
     * @description Indicates if the facility has a current significant violation. 1 = Yes
     * @since 0.0.0
     */
    CurrSvFlag?: string;
    /**
     * @description Indicates if the facility has a current violation. 1 = Yes
     * @since 0.0.0
     */
    CurrVioFlag?: string;
    /**
     * @description The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report:
     *
     * - AFS: Air Facility System for Clean Air Act stationary source programs.
     * - ICP: Integrated Compliance Information System for Clean Water Act programs monitoring National Pollutant Discharge Elimination System (NPDES) permits.
     * - RCR: Resource Conservation and Recovery Act Information System (RCRAInfo) for tracking the Resource Conservation and Recovery Act (RCRA) programs.
     * - NCDB: National Compliance Database System for monitoring national performance of the Toxic Substance Control Act (TSCA); the Emergency Planning and Right-to-Know Act, Section 313 (EPCRA); the Asbestos Hazard Emergency Response (AHERA); and the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA).
     * - TRI: Toxics Release Inventory for Emergency Planning and Community Right-to-Know Act, Section 313 submissions.
     * - NEI: National Emissions Inventory database contains information on stationary and mobile sources that emit criteria air pollutants and their precursors, as well as hazardous air pollutants (HAPs). The database includes estimates of annual emissions, by source, of air pollutants in each area of the country, on an annual basis.
     * - TSCA: Toxic Substances Control Act addressing the production, importation, use, and disposal of specific chemicals.
     * @since 0.0.0
     */
    EPASystem?: string;
    /**
     * @description Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
     * @since 0.0.0
     */
    Ea5yrFlag?: string;
    /**
     * @description A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
     * @since 0.0.0
     */
    EisIDs?: string;
    /**
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     * @since 0.0.0
     */
    EjscreenFlag?: string;
    /**
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     * @since 0.0.0
     */
    EjscreenFlagUs?: string;
    /**
     * @description Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
     * @since 0.0.0
     */
    FacCamdReporter?: string;
    /**
     * @description The facility county name from EPA's Facility Registry System
     * @since 0.0.0
     */
    FacCountyName?: string;
    /**
     * @description The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
     * @since 0.0.0
     */
    FacDerivedHuc?: string;
    /**
     * @description The tribes or tribal territories located within 25 miles of the facility's location.
     * @since 0.0.0
     */
    FacDerivedTRIbes?: string;
    /**
     * @description The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
     * @since 0.0.0
     */
    FacDerivedWBD?: string;
    /**
     * @description The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
     * @since 0.0.0
     */
    FacDerivedWBDName?: string;
    /**
     * @description The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
     * @since 0.0.0
     */
    FacEisAIRReleases?: string;
    /**
     * @description Indicates whether the facility reports to the Emissions Inventory System (EIS).
     * @since 0.0.0
     */
    FacEisReporter?: string;
    /**
     * @description The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
     * @since 0.0.0
     */
    FacFIPSCode?: string;
    /**
     * @description Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
     * @since 0.0.0
     */
    FacFederalAgencyCode?: string;
    /**
     * @description Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
     * @since 0.0.0
     */
    FacFederalAgencyName?: string;
    /**
     * @description The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
     * @since 0.0.0
     */
    FacGHGCO2Releases?: string;
    /**
     * @description Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
     * @since 0.0.0
     */
    FacGHGReporter?: string;
    /**
     * @description Flag showing Y/N whether the facility is located in Indian Country.
     * @since 0.0.0
     */
    FacIndianCntryFlg?: string;
    /**
     * @description Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
     * @since 0.0.0
     */
    FacIndianSpatialFlg?: string;
    /**
     * @description The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     * @since 0.0.0
     */
    FacLat?: string;
    /**
     * @description The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     * @since 0.0.0
     */
    FacLong?: string;
    /**
     * @description Graphical indicator denoting whether geographical data required to map a facility are available.
     * @since 0.0.0
     */
    FacMapFlg?: string;
    /**
     * @description The default map icon image file calculated for the facility by the ECHO program.
     * @since 0.0.0
     */
    FacMapIcon?: string;
    /**
     * @description Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
     * @since 0.0.0
     */
    FacNaaFlag?: string;
    /**
     * @description Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
     * @since 0.0.0
     */
    FacPercentMinority?: string;
    /**
     * @description The number of persons per square mile in the profiled area.
     * @since 0.0.0
     */
    FacPopulationDensity?: string;
    /**
     * @description Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
     * @since 0.0.0
     */
    FacSICCodes?: string;
    /**
     * @description The standardized  facility county name from EPA's Facility Registry System
     * @since 0.0.0
     */
    FacStdCountyName?: string;
    /**
     * @description The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIAIRReleases?: string;
    /**
     * @description The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
     * @since 0.0.0
     */
    FacTRICarcAIRReleases?: string;
    /**
     * @description The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIHapsReleases?: string;
    /**
     * @description Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
     * @since 0.0.0
     */
    FacTRIReporter?: string;
    /**
     * @description A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
     * @since 0.0.0
     */
    FacUsMexBorderFlg?: string;
    /**
     * @description A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
     * @since 0.0.0
     */
    GHGIDs?: string;
    /**
     * @description ???
     * @since 0.0.0
     */
    HasPollRpt?: string;
    /**
     * @description Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
     * @since 0.0.0
     */
    Infea5yrFlag?: string;
    /**
     * @description Indicates if the facility has an inspection within the last 5 years. 1 = Yes
     * @since 0.0.0
     */
    Insp5yrFlag?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
     * @since 0.0.0
     */
    LastDatePce?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
     * @since 0.0.0
     */
    LastDatePceEPA?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
     * @since 0.0.0
     */
    LastDatePceSta?: string;
    /**
     * @description Code for regions within a state. Search criteria for DFR in OTIS.
     * @since 0.0.0
     */
    LocalControlRegionCode?: string;
    /**
     * @description Regions within a state. Search criteria for DFR in OTIS.
     * @since 0.0.0
     */
    LocalControlRegionName?: string;
    /**
     * @description Flag showing Y/N whether location is within the contiguous (lower 48) United States.
     * @since 0.0.0
     */
    Lower48?: string;
    /**
     * @description No Longer Used.
     * @since 0.0.0
     */
    Map?: string;
    /**
     * @description The maximum percentile from all individual EJSCREEN indicators.
     * @since 0.0.0
     */
    MaxPctileUs?: string;
    /**
     * @description A sorting score for internal use.
     * @since 0.0.0
     */
    MaxScore?: string;
    /**
     * @description The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.
     * @since 0.0.0
     */
    NaaCategories?: string;
    /**
     * @description All criteria pollutants that the facility is in nonattainment for.
     * @since 0.0.0
     */
    NaaPollutants?: string;
    /**
     * @description Sequential number assigned to each facility or cluster returned.
     * @since 0.0.0
     */
    ObjectId?: string;
    /**
     * @description The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
     * @since 0.0.0
     */
    Over80CountUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
     * @since 0.0.0
     */
    PctileCancerUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
     * @since 0.0.0
     */
    PctileDpmUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN ozone indicator.
     * @since 0.0.0
     */
    PctileO3Us?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Lead paint indicator.
     * @since 0.0.0
     */
    PctilePctpre1960Us?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN particulate matter indicator.
     * @since 0.0.0
     */
    PctilePmUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
     * @since 0.0.0
     */
    PctileProximityNPDESUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
     * @since 0.0.0
     */
    PctileProximityNplUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
     * @since 0.0.0
     */
    PctileProximityRmpUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
     * @since 0.0.0
     */
    PctileProximityTsdfUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
     * @since 0.0.0
     */
    PctileRespUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
     * @since 0.0.0
     */
    PctileTrafficScoreUs?: string;
    /**
     * @description A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
     * @since 0.0.0
     */
    RCRAIDs?: string;
    /**
     * @description ??
     * @since 0.0.0
     */
    ReferencePoint?: string;
    /**
     * @description An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
     * @since 0.0.0
     */
    RegistryID?: string;
    /**
     * @description A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
     * @since 0.0.0
     */
    RmpIDs?: string;
    /**
     * @description A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
     * @since 0.0.0
     */
    SDWAIDs?: string;
    /**
     * @since 0.0.0
     */
    Score?: string;
    /**
     * @description Unique Identifier assigned by EPA.
     * @since 0.0.0
     */
    SourceID?: string;
    /**
     * @description The name of the statute associated with each of the permits and identifiers linked to the facility:
     * - CAA = the Clean Air Act
     * - CWA = the Clean Water Act
     * - RCRA = the Resource Conservation and Recovery Act
     * - EP313 = the Emergency Planning and Community Right-to-Know Act, Section 313 (also known as the Toxics Release Inventory Program)
     * - TSCA = the Toxic Substances Control Act
     * - SDWA = the Safe Drinking Water Act
     * @since 0.0.0
     */
    Statute?: string;
    /**
     * @description A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
     * @since 0.0.0
     */
    TRIIDs?: string;
    /**
     * @description A flag indicating that the facility is within a tribal area.
     * @since 0.0.0
     */
    TRIbalFlag?: string;
    /**
     * @description Indicates if the facility had a violation within the last 3 years. 1 = Yes
     * @since 0.0.0
     */
    ViolFlag?: string;
    /**
     * @description Contains flags that identify what web accessible documents are available for the facility.
     * @since 0.0.0
     */
    WebDocs?: string;
}
