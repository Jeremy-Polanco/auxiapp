import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const appTitle = 'AuxiApp';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: appTitle,
      home: MyHomePage(title: appTitle),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Index 0: Home',
      style: optionStyle,
    ),
    Text(
      'Index 1: Business',
      style: optionStyle,
    ),
    Text(
      'Index 2: School',
      style: optionStyle,
    ),
    Text(
      'Index 4: Yoniber',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: Center(
        child: _widgetOptions[_selectedIndex],
      ),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text('AuxiApp V1.0',
                  style: TextStyle(
                    color: Colors.white54, // Cambia aquí el color del texto
                    //fontSize: 20.0, // Tamaño de fuente opcional
                    fontWeight: FontWeight.bold, // Peso de fuente opcional
                  )),
            ),
            ListTile(
              title: const Row(
                children: [
                  Icon(
                    Icons.home,
                    color: Colors.blue,
                    size: 35,
                  ),
                  SizedBox(
                      width: 8.0), // Espacio personalizable entre icono y texto
                  Text('Inicio'),
                ],
              ),
              selected: _selectedIndex == 3,
              onTap: () {
                _onItemTapped(0);
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Row(
                children: [
                  Icon(
                    Icons.emergency,
                    color: Colors.red,
                    size: 35,
                  ),
                  SizedBox(
                      width: 8.0), // Espacio personalizable entre icono y texto
                  Text('Emergencias',
                      style: TextStyle(
                        color: Colors.red, // Cambia aquí el color del texto
                        fontSize: 20.0, // Tamaño de fuente opcional
                        fontWeight: FontWeight.bold, // Peso de fuente opcional
                      )),
                ],
              ),
              selected: _selectedIndex == 3,
              onTap: () {
                _onItemTapped(3);
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Row(
                children: [
                  Icon(
                    Icons.chat,
                    color: Colors.blue,
                    size: 35,
                  ),
                  SizedBox(
                      width: 8.0), // Espacio personalizable entre icono y texto
                  Text('Chat de Emergencia'),
                ],
              ),
              selected: _selectedIndex == 3,
              onTap: () {
                _onItemTapped(3);
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Row(
                children: [
                  Icon(
                    Icons.contact_page,
                    color: Colors.blue,
                    size: 35,
                  ),
                  SizedBox(
                      width: 8.0), // Espacio personalizable entre icono y texto
                  Text('Información de Contacto'),
                ],
              ),
              selected: _selectedIndex == 3,
              onTap: () {
                _onItemTapped(3);
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Row(
                children: [
                  Icon(
                    Icons.info,
                    color: Colors.blue,
                    size: 35,
                  ),
                  SizedBox(
                      width: 8.0), // Espacio personalizable entre icono y texto
                  Text('Nosotros'),
                ],
              ),
              selected: _selectedIndex == 3,
              onTap: () {
                _onItemTapped(3);
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}
