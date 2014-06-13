var tags = /<(?:[^<>!]*)>/g;

'<!doctype html>   \
  <title><</title> \
  <span class></span>'.match( tags ); // returns: ["<title>", "</title>", "<span class>", "</span>"]
