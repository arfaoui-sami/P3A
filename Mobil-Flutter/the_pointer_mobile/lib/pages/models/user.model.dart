import 'package:flutter/material.dart';

class User {
  String user;
  String password;

  User({@required user, @required password});

  static User fromDB(String dbuser) {
    return new User(user: dbuser.split(':')[0], password: dbuser.split(':')[1]);
  }
}
