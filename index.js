setInterval(()=>{
    let date = new Date();
    let h_time = date.getHours();
    let m_time = date.getMinutes();
    let s_time = date.getSeconds();

    let hour_rotation_degree = 30*h_time + m_time / 2;
    let minute_rotation_degree = 6*m_time;
    let seacond_rotation_degree = 6*s_time;

    hoursec.style.transform = `rotate(${hour_rotation_degree}deg)`;
    minutesec.style.transform = `rotate(${minute_rotation_degree}deg)`;
    pointsec.style.transform = `rotate(${seacond_rotation_degree}deg)`;
})