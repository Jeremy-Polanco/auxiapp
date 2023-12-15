import 'package:examen1/main.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{

  @override
  Widget build(BuildContext context){

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hola',
      home: Scaffold(
        body: Center(
          child: Container(
            child: Text('Hello word') ,
            ),
            ),
      ),
      
    );
  }

}