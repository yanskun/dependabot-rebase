const branchName = document.querySelectorAll('.gh-header-meta .css-truncate span.css-truncate-target')[1].textContent
const isDependabot = branchName.includes('dependabot')

if (isDependabot) {
  const textarea = document.getElementById('new_comment_field')
  const leftBtnWrapper = document.querySelector('.color-bg-subtle.ml-1')

  const dependabotBtn = document.createElement('button')
  dependabotBtn.className = 'btn-primary btn'
  dependabotBtn.style.backgroundColor = 'rgb(18, 102, 214)'
  dependabotBtn.textContent = `dependabot\nrebase`
  dependabotBtn.onclick = function () {
    textarea.value = '@dependabot rebase'
  }

  leftBtnWrapper.appendChild(dependabotBtn)
}
