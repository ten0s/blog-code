import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

// npx rollup index.js --format cjs --plugin commonjs --plugin node-resolve --external node-gtk --dir pkg

export default {
    input: 'index.js',
    output: {
        dir: 'pkg',
        format: 'cjs'
    },
    plugins: [
        resolve({
            preferBuiltins: true,
        }),
        commonjs(),
    ],
    external: [
        'node-gtk',
    ]
};
