function Land() {
  this.area = '';
  this.status = 'for Sale';
  }
  //Setting status open for sale
  Land.prototype.open = function() {
  this.status = 'Open for Sale';
  return this;
  }
  //Setting status not for sale
  Land.prototype.close = function() {
  this.status = 'Not for Sale';
  return this;
  }
  //Setting Parameters
  Land.prototype.setParams = function(area) {
  this.area = area;
  return this;
  }
  //printing land status
  Land.prototype.doorStatus = function() {
  console.log('The',this.area,'Land is',this.status);
  return this;
  }
  //creating a land object
  var land = new Land();
  land.setParams("500 sq ft").close().doorStatus().open().doorStatus();