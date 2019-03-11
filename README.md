# React-Reduxを使ったTODOリストのサンプル
create-react-appを使って作成されているのでその周りのことはこちら  
[Create React App](https://github.com/facebook/create-react-app).  
## 使ってみる
packageのインストール  
`npm install`  
Reactアプリとして起動  
`npm start`  
[http://localhost:3000](http://localhost:3000)

## 概要
### Container Component
containers/TodoApp.js
- ReduxのStoreやActionをReactのpropsに渡す
- 責務は橋渡しのみでJSXは書かない

### Presentation Component
components/TodoApp.js
- Redux依存のないReact Component

## react-reduxに関して
### Provider
Storeを親からPropsで引き継いでいくのは面倒だが、  
Providerを使うことで任意のComponentでStoreが使える様になる。
```
ReactDom.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
  document.getElementById('root')
)
```

### connect
コンポーネントにStoreを渡している。
引数は以下
- mapStateToProps
- mapDispatchToProps
- mergeProps
- options
