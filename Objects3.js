function bostad(livingArea, rooms, floor) {
  this.livingArea = livingArea;
  this.rooms = rooms;
  this.floor = floor;
}

function hyresrätt() {
    bostad.call()
}
