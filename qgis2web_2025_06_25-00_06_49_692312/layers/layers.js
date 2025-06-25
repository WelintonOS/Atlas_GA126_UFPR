ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([-6865728.723724, -5639666.380927, 7205871.276276, 5082765.474276]);
var wms_layers = [];

var format_Halo_0 = new ol.format.GeoJSON();
var features_Halo_0 = format_Halo_0.readFeatures(json_Halo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Halo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halo_0.addFeatures(features_Halo_0);
var lyr_Halo_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halo_0, 
                style: style_Halo_0,
                popuplayertitle: 'Halo',
                interactive: false,
                title: '<img src="styles/legend/Halo_0.png" /> Halo'
            });
var format_Countries_1 = new ol.format.GeoJSON();
var features_Countries_1 = format_Countries_1.readFeatures(json_Countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_1.addFeatures(features_Countries_1);
var lyr_Countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_1, 
                style: style_Countries_1,
                popuplayertitle: 'Countries',
                interactive: false,
                title: '<img src="styles/legend/Countries_1.png" /> Countries'
            });
var format_Graticules_2 = new ol.format.GeoJSON();
var features_Graticules_2 = format_Graticules_2.readFeatures(json_Graticules_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Graticules_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Graticules_2.addFeatures(features_Graticules_2);
var lyr_Graticules_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Graticules_2, 
                style: style_Graticules_2,
                popuplayertitle: 'Graticules',
                interactive: false,
                title: '<img src="styles/legend/Graticules_2.png" /> Graticules'
            });
var format_FIRs_3 = new ol.format.GeoJSON();
var features_FIRs_3 = format_FIRs_3.readFeatures(json_FIRs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_FIRs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIRs_3.addFeatures(features_FIRs_3);
var lyr_FIRs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIRs_3, 
                style: style_FIRs_3,
                popuplayertitle: 'FIRs',
                interactive: true,
    title: 'FIRs<br />\
    <img src="styles/legend/FIRs_3_0.png" /> SBAO<br />\
    <img src="styles/legend/FIRs_3_1.png" /> SBAZ<br />\
    <img src="styles/legend/FIRs_3_2.png" /> SBBS<br />\
    <img src="styles/legend/FIRs_3_3.png" /> SBCW<br />\
    <img src="styles/legend/FIRs_3_4.png" /> SBRE<br />' });
var format_LimiteBrasil_4 = new ol.format.GeoJSON();
var features_LimiteBrasil_4 = format_LimiteBrasil_4.readFeatures(json_LimiteBrasil_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_LimiteBrasil_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteBrasil_4.addFeatures(features_LimiteBrasil_4);
var lyr_LimiteBrasil_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteBrasil_4, 
                style: style_LimiteBrasil_4,
                popuplayertitle: 'Limite Brasil',
                interactive: false,
                title: '<img src="styles/legend/LimiteBrasil_4.png" /> Limite Brasil'
            });
var format_CLASSIFICAOAVSEC_5 = new ol.format.GeoJSON();
var features_CLASSIFICAOAVSEC_5 = format_CLASSIFICAOAVSEC_5.readFeatures(json_CLASSIFICAOAVSEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_CLASSIFICAOAVSEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASSIFICAOAVSEC_5.addFeatures(features_CLASSIFICAOAVSEC_5);
var lyr_CLASSIFICAOAVSEC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASSIFICAOAVSEC_5, 
                style: style_CLASSIFICAOAVSEC_5,
                popuplayertitle: 'CLASSIFICAÇÃO AVSEC',
                interactive: true,
    title: 'CLASSIFICAÇÃO AVSEC<br />\
    <img src="styles/legend/CLASSIFICAOAVSEC_5_0.png" /> AP-0<br />\
    <img src="styles/legend/CLASSIFICAOAVSEC_5_1.png" /> AP-1<br />\
    <img src="styles/legend/CLASSIFICAOAVSEC_5_2.png" /> AP-2<br />\
    <img src="styles/legend/CLASSIFICAOAVSEC_5_3.png" /> AP-3<br />' });
var format_AerodromosPblicoseConcedidos_6 = new ol.format.GeoJSON();
var features_AerodromosPblicoseConcedidos_6 = format_AerodromosPblicoseConcedidos_6.readFeatures(json_AerodromosPblicoseConcedidos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_AerodromosPblicoseConcedidos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AerodromosPblicoseConcedidos_6.addFeatures(features_AerodromosPblicoseConcedidos_6);
var lyr_AerodromosPblicoseConcedidos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AerodromosPblicoseConcedidos_6, 
                style: style_AerodromosPblicoseConcedidos_6,
                popuplayertitle: 'Aerodromos - Públicos e Concedidos',
                interactive: true,
    title: 'Aerodromos - Públicos e Concedidos<br />\
    <img src="styles/legend/AerodromosPblicoseConcedidos_6_0.png" /> Concedido<br />\
    <img src="styles/legend/AerodromosPblicoseConcedidos_6_1.png" /> Público<br />' });
var group_Ocorrncias = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ocorrências'});
var group_BaseGlobo = new ol.layer.Group({
                                layers: [lyr_Halo_0,lyr_Countries_1,lyr_Graticules_2,],
                                fold: 'close',
                                title: 'Base - Globo'});

lyr_Halo_0.setVisible(true);lyr_Countries_1.setVisible(true);lyr_Graticules_2.setVisible(true);lyr_FIRs_3.setVisible(false);lyr_LimiteBrasil_4.setVisible(false);lyr_CLASSIFICAOAVSEC_5.setVisible(false);lyr_AerodromosPblicoseConcedidos_6.setVisible(false);
var layersList = [group_BaseGlobo,lyr_FIRs_3,lyr_LimiteBrasil_4,lyr_CLASSIFICAOAVSEC_5,lyr_AerodromosPblicoseConcedidos_6];
lyr_Halo_0.set('fieldAliases', {'fid': 'fid', });
lyr_Countries_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'WIKIPEDIA': 'WIKIPEDIA', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', });
lyr_Graticules_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_FIRs_3.set('fieldAliases', {'gid': 'gid', 'airspace_p': 'airspace_p', 'effectived': 'effectived', 'typ': 'typ', 'ident': 'ident', 'icaocode': 'icaocode', 'nam': 'nam', 'areacode': 'areacode', 'codedistve': 'codedistve', 'uplimituni': 'uplimituni', 'codedistv1': 'codedistv1', 'lowerlimit': 'lowerlimit', 'uomdistver': 'uomdistver', 'codewrkhr': 'codewrkhr', 'upperlimit': 'upperlimit', 'lowerlimi1': 'lowerlimi1', 'entryrpt': 'entryrpt', 'txtlocalty': 'txtlocalty', 'txtrmk_loc': 'txtrmk_loc', 'classrmklo': 'classrmklo', 'emenda': 'emenda', 'emenda_fut': 'emenda_fut', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_LimiteBrasil_4.set('fieldAliases', {'PAIS': 'PAIS', 'AREA_KM2': 'AREA_KM2', });
lyr_CLASSIFICAOAVSEC_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'códigooac': 'códigooac', 'ciad': 'ciad', 'nome': 'nome', 'município': 'município', 'uf': 'uf', 'latgeopoin': 'latgeopoin', 'longeopoin': 'longeopoin', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'operação': 'operação', 'operaç_1': 'operaç_1', 'designaç': 'designaç', 'designa_1': 'designa_1', 'designa_12': 'designa_12', 'compriment': 'compriment', 'largura1': 'largura1', 'resistênc': 'resistênc', 'superfíci': 'superfíci', 'designa_13': 'designa_13', 'designa_14': 'designa_14', 'designa_15': 'designa_15', 'comprime_1': 'comprime_1', 'largura2': 'largura2', 'resistê_1': 'resistê_1', 'superfí_1': 'superfí_1', 'situação': 'situação', 'validadedo': 'validadedo', 'portariade': 'portariade', 'linkportar': 'linkportar', 'passageiro': 'passageiro', 'rodadas': 'rodadas', 'rodadas_co': 'rodadas_co', 'bloco': 'bloco', 'empresa': 'empresa', 'concedidos': 'concedidos', 'AVSEC_Classificação AVSEC': 'AVSEC_Classificação AVSEC', });
lyr_AerodromosPblicoseConcedidos_6.set('fieldAliases', {'objectid': 'objectid', 'códigooac': 'códigooac', 'ciad': 'ciad', 'nome': 'nome', 'município': 'município', 'uf': 'uf', 'latgeopoin': 'latgeopoin', 'longeopoin': 'longeopoin', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'operação': 'operação', 'operaç_1': 'operaç_1', 'designaç': 'designaç', 'designa_1': 'designa_1', 'designa_12': 'designa_12', 'compriment': 'compriment', 'largura1': 'largura1', 'resistênc': 'resistênc', 'superfíci': 'superfíci', 'designa_13': 'designa_13', 'designa_14': 'designa_14', 'designa_15': 'designa_15', 'comprime_1': 'comprime_1', 'largura2': 'largura2', 'resistê_1': 'resistê_1', 'superfí_1': 'superfí_1', 'situação': 'situação', 'validadedo': 'validadedo', 'portariade': 'portariade', 'linkportar': 'linkportar', 'passageiro': 'passageiro', 'rodadas': 'rodadas', 'rodadas_co': 'rodadas_co', 'bloco': 'bloco', 'empresa': 'empresa', 'concedidos': 'concedidos', });
lyr_Halo_0.set('fieldImages', {'fid': '', });
lyr_Countries_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'Range', 'POP_RANK': 'Range', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'Range', 'LASTCENSUS': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'WIKIPEDIA': 'Range', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_A3_IS': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', });
lyr_Graticules_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', });
lyr_FIRs_3.set('fieldImages', {'gid': 'Range', 'airspace_p': 'TextEdit', 'effectived': 'DateTime', 'typ': 'TextEdit', 'ident': 'TextEdit', 'icaocode': 'TextEdit', 'nam': 'TextEdit', 'areacode': 'TextEdit', 'codedistve': 'TextEdit', 'uplimituni': 'TextEdit', 'codedistv1': 'TextEdit', 'lowerlimit': 'TextEdit', 'uomdistver': 'TextEdit', 'codewrkhr': 'TextEdit', 'upperlimit': 'TextEdit', 'lowerlimi1': 'TextEdit', 'entryrpt': 'TextEdit', 'txtlocalty': 'TextEdit', 'txtrmk_loc': 'TextEdit', 'classrmklo': 'TextEdit', 'emenda': 'DateTime', 'emenda_fut': 'DateTime', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_LimiteBrasil_4.set('fieldImages', {'PAIS': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_CLASSIFICAOAVSEC_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'códigooac': 'TextEdit', 'ciad': 'TextEdit', 'nome': 'TextEdit', 'município': 'TextEdit', 'uf': 'TextEdit', 'latgeopoin': 'TextEdit', 'longeopoin': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'operação': 'TextEdit', 'operaç_1': 'TextEdit', 'designaç': 'TextEdit', 'designa_1': 'TextEdit', 'designa_12': 'TextEdit', 'compriment': 'TextEdit', 'largura1': 'TextEdit', 'resistênc': 'TextEdit', 'superfíci': 'TextEdit', 'designa_13': 'TextEdit', 'designa_14': 'TextEdit', 'designa_15': 'TextEdit', 'comprime_1': 'TextEdit', 'largura2': 'TextEdit', 'resistê_1': 'TextEdit', 'superfí_1': 'TextEdit', 'situação': 'TextEdit', 'validadedo': 'DateTime', 'portariade': 'TextEdit', 'linkportar': 'TextEdit', 'passageiro': 'TextEdit', 'rodadas': 'Range', 'rodadas_co': 'Range', 'bloco': 'TextEdit', 'empresa': 'TextEdit', 'concedidos': 'TextEdit', 'AVSEC_Classificação AVSEC': 'TextEdit', });
lyr_AerodromosPblicoseConcedidos_6.set('fieldImages', {'objectid': 'TextEdit', 'códigooac': 'TextEdit', 'ciad': 'TextEdit', 'nome': 'TextEdit', 'município': 'TextEdit', 'uf': 'TextEdit', 'latgeopoin': 'TextEdit', 'longeopoin': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'operação': 'TextEdit', 'operaç_1': 'TextEdit', 'designaç': 'TextEdit', 'designa_1': 'TextEdit', 'designa_12': 'TextEdit', 'compriment': 'TextEdit', 'largura1': 'TextEdit', 'resistênc': 'TextEdit', 'superfíci': 'TextEdit', 'designa_13': 'TextEdit', 'designa_14': 'TextEdit', 'designa_15': 'TextEdit', 'comprime_1': 'TextEdit', 'largura2': 'TextEdit', 'resistê_1': 'TextEdit', 'superfí_1': 'TextEdit', 'situação': 'TextEdit', 'validadedo': 'DateTime', 'portariade': 'TextEdit', 'linkportar': 'TextEdit', 'passageiro': 'TextEdit', 'rodadas': 'Range', 'rodadas_co': 'Range', 'bloco': 'TextEdit', 'empresa': 'TextEdit', 'concedidos': 'TextEdit', });
lyr_Halo_0.set('fieldLabels', {'fid': 'no label', });
lyr_Countries_1.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'WIKIPEDIA': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_A3_IS': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', });
lyr_Graticules_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - always visible', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', });
lyr_FIRs_3.set('fieldLabels', {'gid': 'no label', 'airspace_p': 'no label', 'effectived': 'no label', 'typ': 'no label', 'ident': 'inline label - visible with data', 'icaocode': 'no label', 'nam': 'no label', 'areacode': 'no label', 'codedistve': 'no label', 'uplimituni': 'no label', 'codedistv1': 'no label', 'lowerlimit': 'no label', 'uomdistver': 'no label', 'codewrkhr': 'no label', 'upperlimit': 'no label', 'lowerlimi1': 'no label', 'entryrpt': 'no label', 'txtlocalty': 'no label', 'txtrmk_loc': 'no label', 'classrmklo': 'no label', 'emenda': 'no label', 'emenda_fut': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_LimiteBrasil_4.set('fieldLabels', {'PAIS': 'no label', 'AREA_KM2': 'no label', });
lyr_CLASSIFICAOAVSEC_5.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'códigooac': 'no label', 'ciad': 'no label', 'nome': 'no label', 'município': 'no label', 'uf': 'no label', 'latgeopoin': 'no label', 'longeopoin': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'altitude': 'no label', 'operação': 'no label', 'operaç_1': 'no label', 'designaç': 'no label', 'designa_1': 'no label', 'designa_12': 'no label', 'compriment': 'no label', 'largura1': 'no label', 'resistênc': 'no label', 'superfíci': 'no label', 'designa_13': 'no label', 'designa_14': 'no label', 'designa_15': 'no label', 'comprime_1': 'no label', 'largura2': 'no label', 'resistê_1': 'no label', 'superfí_1': 'no label', 'situação': 'no label', 'validadedo': 'no label', 'portariade': 'no label', 'linkportar': 'no label', 'passageiro': 'no label', 'rodadas': 'no label', 'rodadas_co': 'no label', 'bloco': 'no label', 'empresa': 'no label', 'concedidos': 'no label', 'AVSEC_Classificação AVSEC': 'no label', });
lyr_AerodromosPblicoseConcedidos_6.set('fieldLabels', {'objectid': 'no label', 'códigooac': 'no label', 'ciad': 'no label', 'nome': 'no label', 'município': 'no label', 'uf': 'no label', 'latgeopoin': 'no label', 'longeopoin': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'altitude': 'no label', 'operação': 'no label', 'operaç_1': 'no label', 'designaç': 'no label', 'designa_1': 'no label', 'designa_12': 'no label', 'compriment': 'no label', 'largura1': 'no label', 'resistênc': 'no label', 'superfíci': 'no label', 'designa_13': 'no label', 'designa_14': 'no label', 'designa_15': 'no label', 'comprime_1': 'no label', 'largura2': 'no label', 'resistê_1': 'no label', 'superfí_1': 'no label', 'situação': 'no label', 'validadedo': 'no label', 'portariade': 'no label', 'linkportar': 'no label', 'passageiro': 'no label', 'rodadas': 'no label', 'rodadas_co': 'no label', 'bloco': 'no label', 'empresa': 'no label', 'concedidos': 'no label', });
lyr_AerodromosPblicoseConcedidos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});