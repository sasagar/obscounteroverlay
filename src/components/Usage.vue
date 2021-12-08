<template>
  <div class="container">
    <h1>OBS用カウントダウンオーバーレイ</h1>
    <section>
      <h2>どんな物か</h2>
      <p>
        <router-link to="/CountDown">オーバーレイ用ページ</router-link>
        のアドレスを利用して、OBSにカウントダウンを表示させる事ができます。<br />
        何も指定しなかったときには、自動的に2100/01/01
        00:00:00までのカウントダウンになります。都度指定をすることが可能です。
      </p>
    </section>
    <section>
      <h2>指定の仕方</h2>
      <p>
        URLの後ろに<code>?</code>をつけて、更に必要な情報を<code>key=value</code>形式で記述し、複数の情報を<code>&</code>で繋ぐことが出来ます。指定できる物は以下の通りです。
      </p>
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>役割</th>
            <th>規定値</th>
            <th>指定の条件等</th>
            <th>例</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="danger">必須</span><br />time</td>
            <td>終了時間の指定</td>
            <td>
              000000<br /><span class="note">（システム上の規定値）</span>
            </td>
            <td>
              HHMMSS形式<br /><span class="note"
                >durationかtimeかのいずれかの指定が必須です。timeよりもdurationが優先されます。</span
              >
            </td>
            <td><code>time=213000</code></td>
          </tr>

          <tr>
            <td>date</td>
            <td>終了日の指定</td>
            <td>
              21000101<br /><span class="note">（システム上の規定値）</span>
            </td>
            <td>
              YYYYMMDD形式<br />
              <span class="note"
                >省略時は終了時間の指定を基準に直近の日付が自動で指定されます。</span
              >
            </td>
            <td><code>date=20211123</code></td>
          </tr>

          <tr>
            <td><span class="danger">必須</span><br />duration</td>
            <td>期間の指定</td>
            <td>（なし）</td>
            <td>
              HHMMSS形式<br />
              <span class="note">
                99時間59分59秒まで対応。<br />
                ページがロードされたタイミングからのカウントダウンなので注意。<br />（再読込するとそこから再スタート）<br />
                durationかtimeかのいずれかの指定が必須です。timeよりもdurationが優先されます。
              </span>
            </td>
            <td><code>duration=240000</code></td>
          </tr>

          <tr>
            <td>d</td>
            <td>日付部分の表示切り替え</td>
            <td>
              true<br />
              <span class="note">表示状態</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、日付のブロックを消すことができます。
              </span>
            </td>
            <td>
              <code>d=0</code><br />
              <code>d=false</code>
            </td>
          </tr>

          <tr>
            <td>h</td>
            <td>時間部分の表示切り替え</td>
            <td>
              true<br />
              <span class="note">表示状態</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、時間のブロックを消すことができます。
              </span>
            </td>
            <td>
              <code>h=0</code><br />
              <code>h=false</code>
            </td>
          </tr>

          <tr>
            <td>m</td>
            <td>分部分の表示切り替え</td>
            <td>
              true<br />
              <span class="note">表示状態</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、分のブロックを消すことができます。
              </span>
            </td>
            <td>
              <code>m=0</code><br />
              <code>m=false</code>
            </td>
          </tr>

          <tr>
            <td>s</td>
            <td>秒部分の表示切り替え</td>
            <td>
              true<br />
              <span class="note">表示状態</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、秒のブロックを消すことができます。
              </span>
            </td>
            <td>
              <code>s=0</code><br />
              <code>s=false</code>
            </td>
          </tr>

          <tr>
            <td>l</td>
            <td>ラベル部分の表示切り替え</td>
            <td>
              true<br />
              <span class="note">表示状態</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、フリップの下にあるラベルを消すことができます。
              </span>
            </td>
            <td>
              <code>l=0</code><br />
              <code>l=false</code>
            </td>
          </tr>

          <tr>
            <td>a</td>
            <td>アニメーションの有無切替</td>
            <td>
              true<br />
              <span class="note">アニメーションあり</span>
            </td>
            <td>
              true / false または 0 / 1<br />
              <span class="note">
                falseまたは0と指定することで、フリップのアニメーションが無い状態にする事ができます。<br />
                そのときには背景がなくなりますので注意が必要です。（文字色の指定などを調整して下さい。）
              </span>
            </td>
            <td>
              <code>a=0</code><br />
              <code>a=false</code>
            </td>
          </tr>

          <tr>
            <td>cds</td>
            <td>カウントダウンの文字サイズ</td>
            <td>
              3<br />
              <span class="note">3rem相当</span>
            </td>
            <td>
              数値<br />
              <span class="note">
                通常の表示を3として考えて調整してみて下さい。<br />
                このサイズを少し大きめに指定して、OBS内で縮小するとキレイに見えやすいです。<br />
                逆に小さくして、OBS内で拡大すると荒れて見える可能性が高まります。<br />
                内部的には、このサイズ指定にremがついてフォントサイズが指定されます。
              </span>
            </td>
            <td>
              <code>cds=4</code>
            </td>
          </tr>

          <tr>
            <td>lbs</td>
            <td>ラベルの文字サイズ</td>
            <td>
              1.2<br />
              <span class="note">1.2rem相当</span>
            </td>
            <td>
              数値<br />
              <span class="note">
                通常の表示を1.2として考えて調整してみて下さい。<br />
                このサイズを少し大きめに指定して、OBS内で縮小するとキレイに見えやすいです。<br />
                逆に小さくして、OBS内で拡大すると荒れて見える可能性が高まります。<br />
                内部的には、このサイズ指定にremがついてフォントサイズが指定されます。
              </span>
            </td>
            <td>
              <code>lbs=1.1</code>
            </td>
          </tr>

          <tr>
            <td>mc</td>
            <td>メインカラー</td>
            <td>ec685c</td>
            <td>
              #なしHEX色コード<br />
              <span class="note">
                16進数6桁の色コードを指定します。<br />
                #を付けずに合計6文字で指定します。<br />
                フリップの上部にあたる文字色の指定になります。<br />
                アニメーションをオフにしている場合には、全体の文字色になります。
              </span>
            </td>
            <td>
              <code>mc=223a4c</code>
            </td>
          </tr>

          <tr>
            <td>sfc</td>
            <td>サブカラー</td>
            <td>ec685c</td>
            <td>
              #なしHEX色コード<br />
              <span class="note">
                16進数6桁の色コードを指定します。<br />
                #を付けずに合計6文字で指定します。<br />
                フリップの下部にあたる文字色の指定になります。<br />
                アニメーションをオフにしている場合には、無効になります。
              </span>
            </td>
            <td>
              <code>sfc=223a4c</code>
            </td>
          </tr>

          <tr>
            <td>mfbc</td>
            <td>メインフリップカラー</td>
            <td>222222</td>
            <td>
              #なしHEX色コード<br />
              <span class="note">
                16進数6桁の色コードを指定します。<br />
                #を付けずに合計6文字で指定します。<br />
                フリップの上部にあたる背景色の指定です。<br />
                アニメーションをオフにしている場合には、無効になります。
              </span>
            </td>
            <td>
              <code>mfbc=223a4c</code>
            </td>
          </tr>

          <tr>
            <td>sfbc</td>
            <td>サブフリップカラー</td>
            <td>393939</td>
            <td>
              #なしHEX色コード<br />
              <span class="note">
                16進数6桁の色コードを指定します。<br />
                #を付けずに合計6文字で指定します。<br />
                フリップの下部にあたる背景色の指定です。<br />
                アニメーションをオフにしている場合には、無効になります。<br />
                メインのフリップカラーより少しだけ明るめにすると、それっぽく見えると思います。
              </span>
            </td>
            <td>
              <code>sfbc=223a4c</code>
            </td>
          </tr>

          <tr>
            <td>lbc</td>
            <td>ラベルカラー</td>
            <td>222222</td>
            <td>
              #なしHEX色コード<br />
              <span class="note">
                16進数6桁の色コードを指定します。<br />
                #を付けずに合計6文字で指定します。<br />
                ラベル部分の文字色になります。
              </span>
            </td>
            <td>
              <code>lbc=223a4c</code>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>サンプルパラメータ</h2>
      <p>
        例えば、2022年10月15日
        22:00:00までのカウントダウンを、文字色白でラベルを消したいとなった場合には、以下のような文字列を後ろに付ける事になります。<br />
        <code>?date=20221015&time=220000&mc=ffffff&sfc=ffffff&l=0</code>
      </p>
      <p>
        ですのでURLとしては以下の通りになります。<br />
        <code>
          {{ url }}CountDown?date=20221015&time=220000&mc=ffffff&sfc=ffffff&l=0
        </code>
      </p>
    </section>
  </div>
  <footer>©SASAPIYOGAMES.</footer>
</template>

<script>
export default {
  setup() {
    const url = location.href;
    return {
      url,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  text-align: left;
}

table {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: #666 solid 1px;
  border-collapse: collapse;
  tr:nth-child(even) {
    background-color: #eee;
  }
  th,
  td {
    border: #666 solid 1px;
    padding: 10px;
  }
}

code {
  display: inline-block;
  margin: 0 5px;
  border: #f00 solid 1px;
  border-radius: 5px;
  background-color: #ffeeee;
  color: #f00;
  font-weight: bold;
  padding: 2px 5px;
}

.danger {
  display: inline-block;
  background-color: #f00;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 0.7rem;
  color: #fff;
  font-weight: bold;
}
.note {
  font-size: 0.7rem;
  color: #666;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 5px 0;
  text-align: center;
  margin-top: 2rem;
}
</style>