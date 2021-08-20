function myFunction(x) {
    x.classList.toggle("change");

    const menu = document.getElementById('menu-list');

    if (menu.classList.contains('inactive')) {
      menu.classList.remove('inactive');
      menu.classList.add('active')
    } else {
      menu.classList.remove('active');
      menu.classList.add('inactive')
    }

    // document.getElementById('menu-list').classList.toggle("inactive")

  }


const bookmarkSwitch = document.getElementsByTagName('input')

bookmarkSwitch[0].addEventListener('click', () => {
  const labelText = document.getElementById('label-text')
 
  if (bookmarkSwitch[0].checked === true) { 
    labelText.innerText = 'Bookmarked'
  } else {
    labelText.innerText = 'Bookmark'
  }
})

//! Percentage bar:
const topNumber = document.getElementById("percent-part-number").innerText.replace(/\D/g,'');
const bttmNumber = document.getElementById("percent-whole-number").innerText.replace(/\D/g,'');

const progressBar = document.getElementById("progress-bar-percentage")

const getPercentage = Math.floor(topNumber/bttmNumber * 100);

progressBar.style.width = `${getPercentage}%`



//! Show Modal PopUp
const pledgeSelectButton = document.querySelectorAll('.reward-select-button')
const modalBox = document.querySelector('.modal-tier-selection')

function showModal() {
  modalBox.classList.remove('hidden')
}

pledgeSelectButton.forEach((btn) => {
  btn.addEventListener('click', showModal)
})

//! Closing Modal
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener('click', () => {
  modalBox.classList.add('hidden')
})


//////////////////////////////////////////////////////////////////////////////////////
//! Pledge selection
//////////////////////////////////////////////////////////////////////////////////////

const pledgeTierCheckbox = document.querySelectorAll('.selection')
const pledgeOptions = document.querySelectorAll('input[type="radio"]')

const modalCompleted = document.querySelector(".modal-completed");

function toggleActionPledgeButton() {

  //! ini dapet nih div parent .tier-selection, ini adalah KUNCI-nya
  const el = this.closest(".tier-selection")

  //! 1. supaya highlight di box lain hilang 
  const allTierSelectionBox =  document.querySelectorAll('.tier-selection');

  allTierSelectionBox.forEach((box) => {
    if(box.classList.contains('highlight')) {
      box.classList.remove('highlight')
    }
  })

  //! 2. terus diklik supaya jadi highlight
  el.classList.add('highlight')

  //! 3. munculin pledge action box
  const allPledgeActionBox = document.querySelectorAll('.pledge-action-box')
  const allHorizontalDivider = document.querySelectorAll('hr')

  allHorizontalDivider.forEach((hr) => {
    if(hr.classList.contains('active')) {
      hr.classList.remove('active')
      hr.classList.add('inactive')
    }
  })

  allPledgeActionBox.forEach((box) => {
    if(box.classList.contains('active')) {
      box.classList.remove('active')
      box.classList.add('inactive')
    }
  })

  el.querySelector('.pledge-action-box').classList.add('active')
  el.querySelector('.pledge-action-box').classList.remove('inactive')
  el.querySelector('hr').classList.add('active')
  el.querySelector('hr').classList.remove('inactive')

  //! modal completed pop up
  const continueButton = document.querySelectorAll(".continue-btn");
  continueButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalBox.classList.add('hidden')
      modalCompleted.classList.remove("hidden")
    })
  })

}


const closeCompletedModal = document.querySelector('.close-completed-modal');
closeCompletedModal.addEventListener('click', () => {
  modalCompleted.classList.add("hidden")
})
//! EKSEKUSI
pledgeTierCheckbox.forEach((slct) => {
  slct.addEventListener('click', toggleActionPledgeButton)
})



