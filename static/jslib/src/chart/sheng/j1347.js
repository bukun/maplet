var bubu ={ s64:"1.76",s65:"11.29",s11:"14.6",s12:"4.82",s13:"23.91",s14:"9.53",s15:"14.17",s21:"24.32",s22:"11.74",s23:"18.61",s31:"21.6",s32:"48.42",s33:"33.95",s34:"26.08",s35:"21.15",s36:"22.9",s37:"32.51",s41:"32.74",s42:"29.38",s43:"44.62",s44:"90.54",s45:"48.58",s46:"6.09",s50:"17.33",s51:"34.43",s52:"16.95",s53:"19.95",s54:"2.15",s61:"13.55",s62:"9.45",s63:"3.28" };
var title = "2007年各省供用生活用水";
var unit = "亿立方米";
function getColor(d) {
    return d > 45 ? '#800026' :
           d > 35  ? '#BD0026' :
           d > 30  ? '#E31A1C' :
           d > 15  ? '#FC4E2A' :
           d > 20   ? '#FD8D3C' :
           d > 15  ? '#FEB24C' :
           d > 10   ? '#FED976' :
           d > 1   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [1, 10, 15, 20, 15, 30, 35, 45];