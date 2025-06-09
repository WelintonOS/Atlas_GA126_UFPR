var wms_layers = [];

var format_Countries_0 = new ol.format.GeoJSON();
var features_Countries_0 = format_Countries_0.readFeatures(json_Countries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_0.addFeatures(features_Countries_0);
var lyr_Countries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_0, 
                style: style_Countries_0,
                popuplayertitle: 'Countries',
                interactive: false,
                title: '<img src="styles/legend/Countries_0.png" /> Countries'
            });
var format_BR_UF_2024_1 = new ol.format.GeoJSON();
var features_BR_UF_2024_1 = format_BR_UF_2024_1.readFeatures(json_BR_UF_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BR_UF_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BR_UF_2024_1.addFeatures(features_BR_UF_2024_1);
var lyr_BR_UF_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BR_UF_2024_1, 
                style: style_BR_UF_2024_1,
                popuplayertitle: 'BR_UF_2024',
                interactive: false,
                title: '<img src="styles/legend/BR_UF_2024_1.png" /> BR_UF_2024'
            });
var format_TotalPassageirostotalpassageiros_2 = new ol.format.GeoJSON();
var features_TotalPassageirostotalpassageiros_2 = format_TotalPassageirostotalpassageiros_2.readFeatures(json_TotalPassageirostotalpassageiros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalPassageirostotalpassageiros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalPassageirostotalpassageiros_2.addFeatures(features_TotalPassageirostotalpassageiros_2);
cluster_TotalPassageirostotalpassageiros_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TotalPassageirostotalpassageiros_2
});
var lyr_TotalPassageirostotalpassageiros_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TotalPassageirostotalpassageiros_2, 
                style: style_TotalPassageirostotalpassageiros_2,
                popuplayertitle: 'TotalPassageiros — totalpassageiros',
                interactive: true,
                title: '<img src="styles/legend/TotalPassageirostotalpassageiros_2.png" /> TotalPassageiros — totalpassageiros'
            });
var group_Globe = new ol.layer.Group({
                                layers: [lyr_Countries_0,],
                                fold: 'open',
                                title: 'Globe'});

lyr_Countries_0.setVisible(false);lyr_BR_UF_2024_1.setVisible(false);lyr_TotalPassageirostotalpassageiros_2.setVisible(true);
var layersList = [group_Globe,lyr_BR_UF_2024_1,lyr_TotalPassageirostotalpassageiros_2];
lyr_Countries_0.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'WIKIPEDIA': 'WIKIPEDIA', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_A3_IS': 'ADM0_A3_IS', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', });
lyr_BR_UF_2024_1.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr_TotalPassageirostotalpassageiros_2.set('fieldAliases', {'fid': 'fid', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', 'região': 'região', 'passageiros pagos': 'passageiros pagos', 'Passageiros_Milhoes': 'Passageiros_Milhoes', });
lyr_Countries_0.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'Range', 'POP_RANK': 'Range', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'Range', 'LASTCENSUS': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'WIKIPEDIA': 'Range', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_A3_IS': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', });
lyr_BR_UF_2024_1.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', });
lyr_TotalPassageirostotalpassageiros_2.set('fieldImages', {'fid': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', 'região': 'TextEdit', 'passageiros pagos': 'Range', 'Passageiros_Milhoes': 'TextEdit', });
lyr_Countries_0.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'WIKIPEDIA': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_A3_IS': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', });
lyr_BR_UF_2024_1.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr_TotalPassageirostotalpassageiros_2.set('fieldLabels', {'fid': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', 'região': 'no label', 'passageiros pagos': 'no label', 'Passageiros_Milhoes': 'no label', });
lyr_TotalPassageirostotalpassageiros_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});