/*
// Verifies that a string is a valid ipv4 address.
// Returns true or false. 
*/
String.prototype.ipv4Address = function() {
  return /^(([1][0-9][0-9]|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9])\.){3}([1][0-9][0-9]|2[0-4][0-9]|25[0-5]|[1-9][0-9]|[0-9]){1}$/.test(
    this
  );
};

// BEST SOLUTION BY Beast, ubaw, brunolm, isqua, bejczib, devnp... :
String.prototype.ipv4Address = function() {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
};
// uses a negative look-ahead `(\.(?!$)|$)` to make sure that the dot is part of the
// pattern every time, except at the very end of the string. As opposed to what I
// did where I do the match 3 times with the dot at the end, and then one more time
// without the dot.
