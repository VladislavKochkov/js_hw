'use strict';
import Student from './students.js';

const Vladislav = new Student('Vladislav', 'X', 2005);
const Liza = new Student('Liza', 'Y', 2004);
const Vladimir = new Student('Vladimir', 'F', 1992);

for (let i = 0; i < 9; i++) Vladislav.present();
Vladislav.mark(10);
Vladislav.mark(10);
Vladislav.mark(10);

Liza.present();
Liza.present();
Liza.mark(7);
Liza.mark(6);
Liza.mark(5);

Vladimir.absent();
Vladimir.absent();

const students = [Vladislav, Liza, Vladimir];
students.forEach((student) => student.summary());
