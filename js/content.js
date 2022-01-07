// branch の名前を取得しています。
// [1]なのは、 main <- dependabot~~~　となっているので、
// 1つ目が base branch
// 2つ目が ブランチ名
const branchName = document.querySelectorAll('.gh-header-meta .css-truncate span.css-truncate-target')[1].textContent
const isDependabot = branchName.includes('dependabot')

// dependabot からの PR だったら実行する
if (isDependabot) {
  // コメントを入力するセレクタ
  const textarea = document.getElementById('new_comment_field')
  // [Comment]ボタンが存在するセレクタ、今回はここに新しいボタンを追加します。
  const btnWrapper = document.getElementById('partial-new-comment-form-actions')
  const leftBtnWrapper = btnWrapper.querySelector('.color-bg-subtle.ml-1')

  // 実際に追加するボタンセレクタ
  const dependabotBtn = document.createElement('button')
  dependabotBtn.className = 'btn-primary btn dependabot-rebase-btn'
  const css = ".dependabot-rebase-btn { background-color: rgb(18, 102, 214); } .dependabot-rebase-btn:hover { background-color: rgb(0, 75, 190); }"

  var style = document.createElement('style')
  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
  document.getElementsByTagName('head')[0].appendChild(style)

  dependabotBtn.textContent = 'Rebase'
  // ボタンをクリックした時になにをするのか
  dependabotBtn.onclick = function () {
    textarea.value = '@dependabot rebase'
  }

  // 最後にボタンを画面に追加
  leftBtnWrapper.appendChild(dependabotBtn)
}
