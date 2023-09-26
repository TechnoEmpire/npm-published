// peer dependencies を外部モジュールとして処理する
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// node_modules 内のモジュールを解決する
import resolve from '@rollup/plugin-node-resolve';
// CommonJS モジュールをES6 に変換する
import commonjs from '@rollup/plugin-commonjs';
 // Babel でコードをトランスパイルする
import babel from '@rollup/plugin-babel';
// CSS (または SASS/SCSS) を処理する
import postcss from 'rollup-plugin-postcss';

export default {
   // エントリポイントとなるファイル
  input: 'src/index.js',

  // 出力するファイル
  output: [
    {
      file: 'dist/index.js', // CommonJS 形式で出力されるファイルのパス
      format: 'cjs',         // CommonJS 形式で出力
    },
    {
      file: 'dist/index.esm.js', // ES Module 形式で出力されるファイルのパス
      format: 'esm',             // ES Module 形式で出力
    }
  ],
  plugins: [
    peerDepsExternal(), // peer dependencies を外部として扱う
    resolve(),          // node_modules 内のモジュールを解決
    commonjs(),         // CommonJS モジュールをES6に変換
    babel({
      babelHelpers: 'bundled',// Babel のヘルパーをバンドルに含める
      exclude: 'node_modules/**',// node_modules はトランスパイルから除外
      presets: ['@babel/preset-react'] // React の Babel プリセットを使用
    }),

    postcss({
      extensions: ['.scss', '.css'], // 処理する拡張子
      use: [
        ['sass', {
          // SASS のインクルードパスを追加
          includePaths: ['./src/styles', './node_modules']
        }]
      ],
      minimize: true, // CSS を最小化
      extract: true, // CSS を別のファイルに抽出
    }),
  ],
  // これらのモジュールを外部として扱い、バンドルに含めない
  external: ['react', 'react-dom'],
};
