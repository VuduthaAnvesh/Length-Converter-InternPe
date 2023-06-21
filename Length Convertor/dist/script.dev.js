"use strict";
var result;
var note = document.getElementById("note");
var convertBtn = document.getElementById("convertBtn");
var convert = function convert() {
  var fromSelect = document.getElementById("fromSelect");
  var fromUnit = fromSelect.options[fromSelect.selectedIndex].text;
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  var fromValue = document.getElementById("fromValue").value;
  var toValue = document.getElementById("toValue");
  if (fromUnit == "Meter") {
    result = parseFloat(meter_to_(fromValue));
  } else if (fromUnit == "Kilometer") {
    result = parseFloat(kilometer_to_(fromValue));
  } else if (fromUnit == "Mile") {
    result = parseFloat(mile_to_(fromValue));
  } else if (fromUnit == "Inch") {
    result = parseFloat(inch_to_(fromValue));
  } else if (fromUnit == "Foot") {
    result = parseFloat(foot_to_(fromValue));
  } else if (fromUnit == "Yard") {
    result = parseFloat(yard_to_(fromValue));
  } else if (fromUnit == "Rod") {
    result = parseFloat(rod_to_(fromValue));
  } else if (fromUnit == "Chain") {
    result = parseFloat(chain_to_(fromValue));
  } else if (fromUnit == "Furlong") {
    result = parseFloat(furlong_to_(fromValue));
  } else if (fromUnit == "Nautical Mile") {
    result = parseFloat(nauticalMile_to_(fromValue));
  }
  note.innerHTML = "1" + fromUnit + " = " + result / fromValue + toUnit;
  toValue.value = result;
  console.log(result + toUnit);
};
var meter_to_ = function meter_to_(m) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = m;
  } else if (toUnit == "Kilometer") {
    result = m / 1000;
  } else if (toUnit == "Mile") {
    result = m * 0.000621;
  } else if (toUnit == "Inch") {
    result = m * 39.370079;
  } else if (toUnit == "Foot") {
    result = m * 3.28084;
  } else if (toUnit == "Yard") {
    result = m * 1.093613;
  } else if (toUnit == "Rod") {
    result = m * 0.1988387815;
  } else if (toUnit == "Chain") {
    result = m * 0.0497096954;
  } else if (toUnit == "Furlong") {
    result = m * 0.0049709695;
  } else if (toUnit == "Nautical Mile") {
    result = m * 0.0005399568;
  }
  return result;
};
var kilometer_to_ = function kilometer_to_(km) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = km * 1000;
  } else if (toUnit == "Kilometer") {
    result = km;
  } else if (toUnit == "Mile") {
    result = km * 0.62137119224;
  } else if (toUnit == "Inch") {
    result = km * 39370.1;
  } else if (toUnit == "Foot") {
    result = km * 3280.84;
  } else if (toUnit == "Yard") {
    result = km * 1093.6132983;
  } else if (toUnit == "Rod") {
    result = km * 198.83878152;
  } else if (toUnit == "Chain") {
    result = km * 49.709695379;
  } else if (toUnit == "Furlong") {
    result = km * 4.9709695379;
  } else if (toUnit == "Nautical Mile") {
    result = km * 0.5399568035;
  }
  return result;
};
var mile_to_ = function mile_to_(mi) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = mi * 1609.344;
  } else if (toUnit == "Kilometer") {
    result = mi * 1.609344;
  } else if (toUnit == "Mile") {
    result = mi;
  } else if (toUnit == "Inch") {
    result = mi * 63360;
  } else if (toUnit == "Foot") {
    result = mi * 5280;
  } else if (toUnit == "Yard") {
    result = mi * 1760;
  } else if (toUnit == "Rod") {
    result = mi * 320;
  } else if (toUnit == "Chain") {
    result = mi * 80;
  } else if (toUnit == "Furlong") {
    result = mi * 8;
  } else if (toUnit == "Nautical Mile") {
    result = mi * 0.8689762419;
  }
  return result;
};
var inch_to_ = function inch_to_(inch) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = inch * 0.0254;
  } else if (toUnit == "Kilometer") {
    result = inch * 0.000025399986284;
  } else if (toUnit == "Mile") {
    result = inch * 0.000015782828283;
  } else if (toUnit == "Inch") {
    result = inch;
  } else if (toUnit == "Foot") {
    result = inch * 0.083333333333;
  } else if (toUnit == "Yard") {
    result = inch * 0.027777777778;
  } else if (toUnit == "Rod") {
    result = inch * 0.0050505051;
  } else if (toUnit == "Chain") {
    result = inch * 0.0012626263;
  } else if (toUnit == "Furlong") {
    result = inch * 0.0001262626;
  } else if (toUnit == "Nautical Mile") {
    result = inch * 0.0000137149;
  }
  return result;
};
var foot_to_ = function foot_to_(ft) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = ft * 0.3048;
  } else if (toUnit == "Kilometer") {
    result = ft * 0.00030479999025;
  } else if (toUnit == "Mile") {
    result = ft * 0.00018939393939;
  } else if (toUnit == "Inch") {
    result = ft * 12;
  } else if (toUnit == "Foot") {
    result = ft;
  } else if (toUnit == "Yard") {
    result = ft * 0.33333333333;
  } else if (toUnit == "Rod") {
    result = ft * 0.0606060606;
  } else if (toUnit == "Chain") {
    result = ft * 0.0151515152;
  } else if (toUnit == "Furlong") {
    result = ft * 0.0015151515;
  } else if (toUnit == "Nautical Mile") {
    result = ft * 0.0001645788;
  }
  return result;
};
var yard_to_ = function yard_to_(yd) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = yd * 0.9144;
  } else if (toUnit == "Kilometer") {
    result = yd * 0.0009144;
  } else if (toUnit == "Mile") {
    result = yd * 0.00056818181818;
  } else if (toUnit == "Inch") {
    result = yd * 36;
  } else if (toUnit == "Foot") {
    result = yd * 3;
  } else if (toUnit == "Yard") {
    result = yd;
  } else if (toUnit == "Rod") {
    result = yd * 0.1818181818;
  } else if (toUnit == "Chain") {
    result = yd * 0.0454545455;
  } else if (toUnit == "Furlong") {
    result = yd * 0.0045454545;
  } else if (toUnit == "Nautical Mile") {
    result = yd * 0.0004937365;
  }
  return result;
};
var rod_to_ = function rod_to_(rod) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = rod * 5.0292;
  } else if (toUnit == "Kilometer") {
    result = rod * 0.0050292;
  } else if (toUnit == "Mile") {
    result = rod * 0.003125;
  } else if (toUnit == "Inch") {
    result = rod * 198;
  } else if (toUnit == "Foot") {
    result = rod * 16.5;
  } else if (toUnit == "Yard") {
    result = rod * 5.5;
  } else if (toUnit == "Rod") {
    result = rod;
  } else if (toUnit == "Chain") {
    result = rod * 0.25;
  } else if (toUnit == "Furlong") {
    result = rod * 0.025;
  } else if (toUnit == "Nautical Mile") {
    result = rod * 0.0027155508;
  }
  return result;
};
var chain_to_ = function chain_to_(ch) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = ch * 20.1168;
  } else if (toUnit == "Kilometer") {
    result = ch * 0.0201168;
  } else if (toUnit == "Mile") {
    result = ch * 0.0125;
  } else if (toUnit == "Inch") {
    result = ch * 792;
  } else if (toUnit == "Foot") {
    result = ch * 66;
  } else if (toUnit == "Yard") {
    result = ch * 22;
  } else if (toUnit == "Rod") {
    result = ch * 4;
  } else if (toUnit == "Chain") {
    result = ch;
  } else if (toUnit == "Furlong") {
    result = ch * 0.1;
  } else if (toUnit == "Nautical Mile") {
    result = ch * 0.010862203;
  }
  return result;
};
var furlong_to_ = function furlong_to_(fur) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = fur * 201.168;
  } else if (toUnit == "Kilometer") {
    result = fur * 0.201168;
  } else if (toUnit == "Mile") {
    result = fur * 0.125;
  } else if (toUnit == "Inch") {
    result = fur * 7920;
  } else if (toUnit == "Foot") {
    result = fur * 660;
  } else if (toUnit == "Yard") {
    result = fur * 220;
  } else if (toUnit == "Rod") {
    result = fur * 40;
  } else if (toUnit == "Chain") {
    result = fur * 10;
  } else if (toUnit == "Furlong") {
    result = fur;
  } else if (toUnit == "Nautical Mile") {
    result = fur * 0.1086220302;
  }
  return result;
};
var nauticalMile_to_ = function nauticalMile_to_(nmi) {
  var toSelect = document.getElementById("toSelect");
  var toUnit = toSelect.options[toSelect.selectedIndex].text;
  if (toUnit == "Meter") {
    result = nmi * 1852;
  } else if (toUnit == "Kilometer") {
    result = nmi * 1.852;
  } else if (toUnit == "Mile") {
    result = nmi * 1.150779448;
  } else if (toUnit == "Inch") {
    result = nmi * 72913.385827;
  } else if (toUnit == "Foot") {
    result = nmi * 6076.1154856;
  } else if (toUnit == "Yard") {
    result = nmi * 2025.3718285;
  } else if (toUnit == "Rod") {
    result = nmi * 368.24942336753;
  } else if (toUnit == "Chain") {
    result = nmi * 92.062355842;
  } else if (toUnit == "Furlong") {
    result = nmi * 9.2062355842;
  } else if (toUnit == "Nautical Mile") {
    result = nmi;
  }
  return result;
};
convertBtn.addEventListener("click", convert);