profile_btn = document.getElementById('profile')
profile_btn.addEventListener('click', toggle_profile)
profile_close = document.getElementsByClassName('profile_close')[0]
profile_close.addEventListener('click', toggle_profile)

notification_btn = document.getElementById('notifications')
notification_btn.addEventListener('click', toggle_notifications)
notification_close = document.getElementsByClassName('notifications_close')[0]
notification_close.addEventListener('click', toggle_notifications)

config_btn = document.getElementById('configs')
config_btn.addEventListener('click', toggle_configs)
config_close = document.getElementsByClassName('configs_close')[0]
config_close.addEventListener('click', toggle_configs)

registro_btn = document.getElementById('registros')
registro_btn.addEventListener('click', toggle_registros)
registro_close = document.getElementsByClassName('registros_close')[0]
registro_close.addEventListener('click', toggle_registros)

info_btn = document.getElementById('infos')
info_btn.addEventListener('click', toggle_infos)
info_close = document.getElementsByClassName('infos_close')[0]
info_close.addEventListener('click', toggle_infos)

function toggle_profile(){
    profile_view = document.getElementsByClassName('profile')[0]
    profile_view.classList.toggle('toggle_profile')
}

function toggle_notifications(){
    profile_view = document.getElementsByClassName('notifications')[0]
    profile_view.classList.toggle('toggle_notifications')
}

function toggle_configs(){
    profile_view = document.getElementsByClassName('configs')[0]
    profile_view.classList.toggle('toggle_configs')
}

function toggle_registros(){
    profile_view = document.getElementsByClassName('registros')[0]
    profile_view.classList.toggle('toggle_registros')
}

function toggle_infos(){
    profile_view = document.getElementsByClassName('infos')[0]
    profile_view.classList.toggle('toggle_infos')
}



const btn_map = document.getElementsByClassName('grid_item')[0]
const close_map = document.getElementsByClassName('map_close')[0]

const bg = document.getElementsByClassName('blur')[0]
const box = document.getElementsByTagName('iframe')[0]

btn_map.addEventListener('click', toggle_map)


function toggle_map(){
    bg.classList.toggle('popup')
    box.classList.toggle('popup')
    close_map.classList.toggle('popup')
}
