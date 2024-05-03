var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Huyen_LongAn_1 = new ol.format.GeoJSON();
var features_Huyen_LongAn_1 = format_Huyen_LongAn_1.readFeatures(json_Huyen_LongAn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huyen_LongAn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huyen_LongAn_1.addFeatures(features_Huyen_LongAn_1);
var lyr_Huyen_LongAn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huyen_LongAn_1, 
                style: style_Huyen_LongAn_1,
                popuplayertitle: "Huyen_LongAn",
                interactive: true,
    title: 'Huyen_LongAn<br />\
    <img src="styles/legend/Huyen_LongAn_1_0.png" /> <br />\
    <img src="styles/legend/Huyen_LongAn_1_1.png" /> 405<br />\
    <img src="styles/legend/Huyen_LongAn_1_2.png" /> 406<br />\
    <img src="styles/legend/Huyen_LongAn_1_3.png" /> 407<br />\
    <img src="styles/legend/Huyen_LongAn_1_4.png" /> 408<br />\
    <img src="styles/legend/Huyen_LongAn_1_5.png" /> 409<br />\
    <img src="styles/legend/Huyen_LongAn_1_6.png" /> 410<br />\
    <img src="styles/legend/Huyen_LongAn_1_7.png" /> 411<br />\
    <img src="styles/legend/Huyen_LongAn_1_8.png" /> 412<br />\
    <img src="styles/legend/Huyen_LongAn_1_9.png" /> 413<br />\
    <img src="styles/legend/Huyen_LongAn_1_10.png" /> 414<br />\
    <img src="styles/legend/Huyen_LongAn_1_11.png" /> 415<br />\
    <img src="styles/legend/Huyen_LongAn_1_12.png" /> 416<br />\
    <img src="styles/legend/Huyen_LongAn_1_13.png" /> 417<br />\
    <img src="styles/legend/Huyen_LongAn_1_14.png" /> 418<br />'
        });
var format_Dongnuoc_LongAn_2 = new ol.format.GeoJSON();
var features_Dongnuoc_LongAn_2 = format_Dongnuoc_LongAn_2.readFeatures(json_Dongnuoc_LongAn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dongnuoc_LongAn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dongnuoc_LongAn_2.addFeatures(features_Dongnuoc_LongAn_2);
var lyr_Dongnuoc_LongAn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dongnuoc_LongAn_2, 
                style: style_Dongnuoc_LongAn_2,
                popuplayertitle: "Dongnuoc_LongAn",
                interactive: true,
                title: '<img src="styles/legend/Dongnuoc_LongAn_2.png" /> Dongnuoc_LongAn'
            });
var format_GiaoThong_LongAn_3 = new ol.format.GeoJSON();
var features_GiaoThong_LongAn_3 = format_GiaoThong_LongAn_3.readFeatures(json_GiaoThong_LongAn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiaoThong_LongAn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaoThong_LongAn_3.addFeatures(features_GiaoThong_LongAn_3);
var lyr_GiaoThong_LongAn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaoThong_LongAn_3, 
                style: style_GiaoThong_LongAn_3,
                popuplayertitle: "GiaoThong_LongAn",
                interactive: true,
                title: '<img src="styles/legend/GiaoThong_LongAn_3.png" /> GiaoThong_LongAn'
            });
var format_UBND_4 = new ol.format.GeoJSON();
var features_UBND_4 = format_UBND_4.readFeatures(json_UBND_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBND_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_4.addFeatures(features_UBND_4);
var lyr_UBND_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_4, 
                style: style_UBND_4,
                popuplayertitle: "UBND",
                interactive: true,
                title: '<img src="styles/legend/UBND_4.png" /> UBND'
            });
var format_RG_LongAn_5 = new ol.format.GeoJSON();
var features_RG_LongAn_5 = format_RG_LongAn_5.readFeatures(json_RG_LongAn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RG_LongAn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RG_LongAn_5.addFeatures(features_RG_LongAn_5);
var lyr_RG_LongAn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RG_LongAn_5, 
                style: style_RG_LongAn_5,
                popuplayertitle: "RG_LongAn",
                interactive: true,
                title: '<img src="styles/legend/RG_LongAn_5.png" /> RG_LongAn'
            });
var format_MDDS_6 = new ol.format.GeoJSON();
var features_MDDS_6 = format_MDDS_6.readFeatures(json_MDDS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MDDS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MDDS_6.addFeatures(features_MDDS_6);
var lyr_MDDS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MDDS_6, 
                style: style_MDDS_6,
                popuplayertitle: "MDDS",
                interactive: true,
                title: 'MDDS'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Huyen_LongAn_1.setVisible(true);lyr_Dongnuoc_LongAn_2.setVisible(true);lyr_GiaoThong_LongAn_3.setVisible(true);lyr_UBND_4.setVisible(true);lyr_RG_LongAn_5.setVisible(true);lyr_MDDS_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Huyen_LongAn_1,lyr_Dongnuoc_LongAn_2,lyr_GiaoThong_LongAn_3,lyr_UBND_4,lyr_RG_LongAn_5,lyr_MDDS_6];
lyr_Huyen_LongAn_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Danso': 'Danso', 'Dientich': 'Dientich', 'Matdodanso': 'Matdodanso', });
lyr_Dongnuoc_LongAn_2.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_GiaoThong_LongAn_3.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_UBND_4.set('fieldAliases', {'id': 'id', 'TenUBND': 'TenUBND', });
lyr_RG_LongAn_5.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_MDDS_6.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Danso': 'Danso', 'Dientich': 'Dientich', 'Matdodanso': 'Matdodanso', });
lyr_Huyen_LongAn_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Danso': 'TextEdit', 'Dientich': 'TextEdit', 'Matdodanso': 'TextEdit', });
lyr_Dongnuoc_LongAn_2.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_GiaoThong_LongAn_3.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_UBND_4.set('fieldImages', {'id': 'TextEdit', 'TenUBND': 'TextEdit', });
lyr_RG_LongAn_5.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_MDDS_6.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Danso': 'TextEdit', 'Dientich': 'TextEdit', 'Matdodanso': 'TextEdit', });
lyr_Huyen_LongAn_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Danso': 'no label', 'Dientich': 'no label', 'Matdodanso': 'no label', });
lyr_Dongnuoc_LongAn_2.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_GiaoThong_LongAn_3.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_UBND_4.set('fieldLabels', {'id': 'no label', 'TenUBND': 'no label', });
lyr_RG_LongAn_5.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_MDDS_6.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Danso': 'no label', 'Dientich': 'no label', 'Matdodanso': 'no label', });
lyr_MDDS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});