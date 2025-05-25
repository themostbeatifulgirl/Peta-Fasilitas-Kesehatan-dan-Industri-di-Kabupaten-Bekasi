var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                popuplayertitle: 'Kecamatan',
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_1_0.png" /> Kecil<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Sedang<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Besar<br />' });
var format_FasilitasKesehatan_2 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_2 = format_FasilitasKesehatan_2.readFeatures(json_FasilitasKesehatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_2.addFeatures(features_FasilitasKesehatan_2);
var lyr_FasilitasKesehatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_2, 
                style: style_FasilitasKesehatan_2,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_2.png" /> Fasilitas Kesehatan'
            });
var format_Industri_3 = new ol.format.GeoJSON();
var features_Industri_3 = format_Industri_3.readFeatures(json_Industri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industri_3.addFeatures(features_Industri_3);
var lyr_Industri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industri_3, 
                style: style_Industri_3,
                popuplayertitle: 'Industri',
                interactive: true,
                title: '<img src="styles/legend/Industri_3.png" /> Industri'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_FasilitasKesehatan_2.setVisible(true);lyr_Industri_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kecamatan_1,lyr_FasilitasKesehatan_2,lyr_Industri_3];
lyr_Kecamatan_1.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Luas (Ha)': 'Luas Wilayah (Ha)', });
lyr_FasilitasKesehatan_2.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Industri_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_Kecamatan_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'Luas (Ha)': 'TextEdit', });
lyr_FasilitasKesehatan_2.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Industri_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', });
lyr_FasilitasKesehatan_2.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_Industri_3.set('fieldLabels', {'REMARK': 'inline label - always visible', });
lyr_Industri_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});