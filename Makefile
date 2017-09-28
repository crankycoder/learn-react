all:
	babel --plugins babel-plugin-transform-react-jsx src/index.jsx > build/index.js
