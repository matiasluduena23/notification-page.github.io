const markRead = document.querySelector('.markRead');
const notificationNumber = document.querySelector('.notificationUnread');
const notificationUnread = document.querySelectorAll('.unread');


markRead.addEventListener('click', () => {
  notificationNumber.innerHTML = "0";
  
  notificationUnread.forEach(item => {
    item.classList.remove('unread');
  })
  
})