const branchName = document.querySelectorAll('.gh-header-meta .css-truncate span.css-truncate-target')[1].textContent
const isDependabot = branchName.includes('dependabot')

if (isDependabot) {
  const textarea = document.getElementById('new_comment_field')
  const leftBtnWrapper = document.querySelector('.color-bg-subtle.ml-1')

  const dependabotBtn = document.createElement('button')
  dependabotBtn.className = 'btn-primary btn dependabot-rebase-btn'
  const css = ".dependabot-rebase-btn { background-color: rgb(18, 102, 214); } .dependabot-rebase-btn:hover { background-color: rgb(0, 75, 190); }"

  var style = document.createElement('style');
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName('head')[0].appendChild(style);

  dependabotBtn.textContent = `dependabot\nrebase`
  dependabotBtn.onclick = function () {
    textarea.value = '@dependabot rebase'
  }

  leftBtnWrapper.appendChild(dependabotBtn)
}
