all: webpack

webpack:
	webpack -d

babelify:
	babel --plugins babel-plugin-transform-react-jsx src/index.jsx > build/index.js

