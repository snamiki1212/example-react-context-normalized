
# ReactのState設計にて正規化したときのサンプル

- Ref: https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure

## Redux

- domain+entityとなるので、reselectによるcreateSelectorが必要になる
- 基本的に entity+domainでreducer を分割しているので、基本的にdomain+entityでdispatchを行う必要があり、煩雑。
  - かつ、domainとentityの実行順序を意識しないと参照不可になることもある
- entityが `{[id:string]: Object}` になるので、型推論が弱い。厳格になるようにする書く方法がある？

## Context
### Domain and Entity

- フロー
  - ⭕️: `[component] -> [context:domain] -> [context:entity]`
  - ⭕️: `[component] -> [context:entity]`
  - ✖️:`[context:entity] -> [context:domain]` 

- context:entity
  - 各Modelのデータが格納されている
- context:domain
  - 各表示データを示す内容と、entityのidが格納されている
  - domain+entityの結果をmemoしておく

- Q. componentが直接domain を呼ぶケースもOK?
  - yes。必ず`context:domain`を経由させても良いが、わざわざやる手間もかかるので、アプリ規模などにもよる。
- Q. domainとEntityが密結合な状態だったら？
  - A. 疎結合にする。ただし、行う必要がない場合は、やらないで良いと思う。ただ、新しい画面が発生して、分解する必要が出てきたら、新しい画面を作成する前に、必ず分解タスクを行ってから新しい画面を作成するタスクを行わないといけない。そのため、密結合であることを明示するために、DomainEntityか、TightlyCoupledみたいなレイヤーを作っておくのが良いかもしれない。そのレイヤーにあるファイルへの拡張がある場合は基本的に疎結合にしてから、つまり、Entity・Domainに分割を行ってから、本来やりたいタスクを行う、という仕切りにする。

### UI

- フロー
  - `[component] -> [context:UI]`
  - `[context:domain] -> [context:UI]`
- Memo
  - `context:UI`は`component`か`context:domain`から呼ばれる
  - `context:entity`からは呼ばれない(?)
