// GENERATE JS
$("#btnGen").click(function() {
  if ($("#rndNumber").prop('checked')) {
    var rndNum = randomNumber();
  } else {
    var rndNum = "";
  }

  var nameChar = getNameCharacter();
  var collectDate = collectionDate();
  var partNum = partNumber()

  var result = nameChar + collectDate + partNum + rndNum;
  result.toString();

  if ($("#forceCaps").prop('checked')) {
    $("#result").html(result.toUpperCase());
  } else {
    $("#result").html(result);
  }

});

// Random Number Generator
function randomNumber() {
  var number = 0;

  number = Math.floor((Math.random() * 99) + 1);

  return number;
}

// Get first character First/Last
function getNameCharacter() {
  var fname, fchar, lname, lchar = "";

  if ($("#firstName")) {
    fname = $("#firstName").val();
    fchar = fname.substring(0,1);
  }

  if ($("#lastName")) {
    lname = $("#lastName").val();
    lchar = lname.substring(0,1);
  }

  return fchar + lchar;
}

// Collection Date
function collectionDate() {
  var collectDate, output = "";

  if ($("#collectDate")) {
    collectDate = $("#collectDate").val();
  }

  output = collectDate.replace(/[^a-z0-9\s]/gi, '');

  return output;
}

// Part Number
function partNumber() {
  var output = "";

  if ($("#partNumber")) {
    output = $("#partNumber").val();
  }

  return output;
}
