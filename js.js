// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне
// виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий
// варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви
// забули гаманець і лишились голодні.



function endSleep(isNotSleep, cb) {
       setTimeout( () =>  {
        if (isNotSleep) {
            cb(null, isNotSleep)
            console.log('GOOD morning!');
        }
        else {
            cb('Hey!!! you very long sleep!');
        }

           }, 0)
}


function brekF(brekF, cb) {
  setTimeout( () => {
    brekF
    ? cb(null, 'i am pohavav')
        : cb('FIND HAVKU!')
  }, 500)
}


function kava(coffe, cb) {
    setTimeout( () => {
        coffe
            ? cb(null, 'i am dring')
            : cb('FIND water!')
    }, 1000)
}

function goToBursa(bursa, cb) {
    setTimeout( () => {
        bursa
            ? cb(null, 'i am in bus - 9')
            : cb('LETS go in BURSA')
    }, 1500)
}

function obid(obid, cb) {
    setTimeout( () => {
        obid
            ? cb(null, 'mmmm hot dog')
            : cb('no money?')
    }, 2000)
}

function goToHome(home, cb) {
    setTimeout( () => {
        home
            ? cb(null, 'going  to home')
            : cb('no home')
    }, 2500)
}

function vechera(vech, cb) {
    setTimeout( () => {
        vech
            ? cb(null, 'mmmm nam nam')
            : cb('not foot - not bad')
    }, 2700)
}

function relax(rel, cb) {
    setTimeout( () => {
        rel
            ? cb(null, 'relax')
            : cb('not relax((((')
    }, 3000)
}

function sport(sport, cb) {
    setTimeout( () => {
        sport
            ? cb(null, 'workout')
            : cb('lets go learn react js')
    }, 3500)
}

function learn(lea, cb) {
    setTimeout( () => {
        lea
            ? cb(null, 'learn eventLoop')
            : cb('i am need progres!!!')
    }, 4000)
}

endSleep(true,(err, inf) => {
    if (err) {
        console.log(err);
    }
    else {

        brekF(true, (err, inf) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(inf);
                kava(true, (err, inf) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(inf);
                        goToBursa(true, (err, inf) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(inf);
                                obid(true, (err, inf) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        console.log(inf);
                                        goToHome(err, (err, inf) => {
                                            if (err) {
                                                console.log(err);
                                            }
                                            else {
                                                console.log(inf);
                                                vechera(true, (err, inf) => {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    else {
                                                        console.log(inf);
                                                        relax(true, (err, inf) => {
                                                            if (err) {
                                                                console.log(err);
                                                            }
                                                            else {
                                                                console.log(inf);
                                                                sport(true, (err, inf) => {
                                                                    if (err) {
                                                                        console.log(err);
                                                                    }
                                                                    else {
                                                                        console.log(inf);
                                                                        learn(true, (err, inf) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                            }
                                                                            else  {
                                                                                console.log(inf);
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                            }
                        )
                    }
                })
            }
        })
    }
} )





// PROMISE

// function endSleep(isNotSleep) {
//     console.log('UP!')
//     return new Promise((resolve, reject) =>  {
//     setTimeout( () =>  {
//         isNotSleep
//        ? resolve(isNotSleep)
//         :    reject('Hey!!! you very long sleep!');
//
//     }, 0)
//     })
// }
//
// function brekF(brekF) {
//     console.log('am am am')
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         brekF
//             ? resolve(brekF)
//             : reject('FIND HAVKU!')
//     }, 500)
//     })
// }
//
// function kava(coffe) {
//     console.log('drink coffe')
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         coffe
//             ? resolve(coffe)
//             : reject('FIND water!')
//     }, 1000)
//     })
// }
//
// function goToBursa(bursa) {
//     console.log('go bursa')
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         bursa
//             ? resolve(bursa)
//             : reject('LETS go in BURSA')
//     }, 1500)
//     })
// }
//
// function obid(obid) {
//     console.log('obid')
//     return new  Promise((resolve, reject) => {
//     setTimeout( () => {
//         obid
//             ? resolve(obid)
//             : reject('no money?')
//     }, 2000)
//     })
// }
//
// function goToHome(home) {
//     console.log('Let.s go to home')
//     return new  Promise((resolve, reject) => {
//     setTimeout( () => {
//         home
//             ? resolve(home)
//             : reject('no home')
//     }, 2500)
//     })
// }
//
// function vechera(vech) {
//     console.log('eat vechera')
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         vech
//             ? resolve(vech)
//             : reject('not foot - not bad')
//     }, 2700)
//     })
// }
//
// function relax(rel) {
//     console.log('relax time')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             rel
//                 ? resolve(rel)
//                 : reject('not relax((((')
//         }, 3000)
//     })
// }
//
//
// function sport(sport) {
//     console.log('sport time')
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         sport
//             ? resolve(sport)
//             : reject('lets go learn react js')
//     }, 3500)
//     })
// }
//
// function learn(lea) {
//     console.log('js time')
//     return new  Promise((resolve, reject) => {
//     setTimeout( () => {
//         lea
//             ? resolve(lea)
//             : reject('i am need progres!!!')
//     }, 4000)
//     })
// }
//
//
// endSleep('good morning')
// .then((res) => {
//     console.log(res);
//     return brekF('i am pohavav')
// } )
//
//     .then((res) => {
//         console.log(res);
//         return kava('i am dring')
//     } )
//     .then((res) => {
//         console.log(res);
//         return goToBursa('LETS go in BURSA')
//     } )
//     .then((res) => {
//         console.log(res);
//         return obid('mmmm hot dog')
//     } )
//     .then((res) => {
//         console.log(res);
//         return goToHome('going  to home')
//     } )
//     .then((res) => {
//         console.log(res);
//         return vechera('mmmm nam nam')
//     } )
//     .then((res) => {
//         console.log(res);
//         return relax('relax')
//     } )
//     .then((res) => {
//         console.log(res);
//         return sport('workout')
//     } )
//     .then((res) => {
//         console.log(res);
//         return learn('learn eventLoop')
//     } )
//     .catch((error) => console.log('its error '+ error) )