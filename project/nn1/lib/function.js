var F = module.exports = {}

F.add = function (x, y) {
  return x + y
}

F.gadd = function (x, y) {
  return 1
}

F.mul = function (x, y) {
  return x * y
}

F.gmul = function (x, y) {
  return y
}

F.gmuly = function (x, y) {
  return x
}
