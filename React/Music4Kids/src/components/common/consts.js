export function mobileCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

export const allNotes = [
  {
    id: 0,
    name: "Dó",
    frequency: 261.6,
    defaultImg: "do1.png",
    playingImg: "do2.png",
    duration: 1,
  },
  {
    id: 1,
    name: "Ré",
    frequency: 293.7,
    defaultImg: "re1.png",
    playingImg: "re2.png",
    duration: 1,
  },
  {
    id: 2,
    name: "Mi",
    frequency: 329.6,
    defaultImg: "mi1.png",
    playingImg: "mi2.png",
    duration: 1,
  },
  {
    id: 3,
    name: "Fa",
    frequency: 349.2,
    defaultImg: "fa1.png",
    playingImg: "fa2.png",
    duration: 1,
  },
  {
    id: 4,
    name: "Sol",
    frequency: 392.0,
    defaultImg: "sol1.png",
    playingImg: "sol2.png",
    duration: 1,
  },
  {
    id: 5,
    name: "Lá",
    frequency: 440.0,
    defaultImg: "la1.png",
    playingImg: "la2.png",
    duration: 1,
  },
  {
    id: 6,
    name: "Si",
    frequency: 493.9,
    defaultImg: "si1.png",
    playingImg: "si2.png",
    duration: 1,
  },
  // {
  //   id: 7,
  //   name: "Dó",
  //   frequency: 523.3,
  //   defaultImg: "do1.png",
  //   playingImg: "do2.png",
  // },
];

export const challenges = [
  {
    level: 1,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
    ],
    startWithLoop: true,
    showResult: true,
    result: [
      {
        times: 4,
        notes: [
          { name: "Dó", duration: 1 },
          { name: "Ré", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 1,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
    ],
    startWithLoop: true,
    showResult: false,
    result: [
      {
        times: 4,
        notes: [
          { name: "Dó", duration: 1 },
          { name: "Ré", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 2,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
    ],
    startWithLoop: true,
    result: [
      {
        times: 4,
        notes: [
          { name: "Lá", duration: 1 },
          { name: "Sol", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 3,
    showNotes: true,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Lá", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Sol", duration: 1 },
    ],

    result: [
      {
        times: 3,
        notes: [
          { name: "Lá", duration: 1 },
          { name: "Lá", duration: 1 },
          { name: "Sol", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 3,
    showNotes: true,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 1 },
    ],
    result: [
      {
        times: 3,
        notes: [
          { name: "Ré", duration: 1 },
          { name: "Mi", duration: 1 },
          { name: "Dó", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 4,
    showNotes: true,
    message: "QUAIS NOTAS SE REPETEM? / WHAT IS THE PATTERN?",
    notes: [
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
    ],

    result: [
      {
        times: 3,
        notes: [
          { name: "Ré", duration: 1 },
          { name: "Mi", duration: 0.5 },
          { name: "Dó", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 5,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
    ],
    
    result: [
      {
        times: 2,
        notes: [
          { name: "Mi", duration: 0.5 },
          { name: "Mi", duration: 0.5 },
          { name: "Dó", duration: 0.5 },
          { name: "Sol", duration: 0.5 },
          { name: "Dó", duration: 0.5 },
          { name: "Sol", duration: 0.5 }
        ],
      },
    ],
  },
  {
    level: 5,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
    ],
    result: [
      {
        times: 2,
        notes: [
          { name: "Mi", duration: 0.5 },
          { name: "Mi", duration: 0.5 },
          { name: "Mi", duration: 0.5 },
          { name: "Dó", duration: 0.5 },
          { name: "Sol", duration: 0.5 },
          { name: "Dó", duration: 0.5 },
          { name: "Sol", duration: 0.5 }
        ],
      },
    ],
  },
  {
    level: 6,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Sol", duration: 0.5 },
      { name: "Sol", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Sol", duration: 0.5 },
      { name: "Sol", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Sol", duration: 0.5 },
      { name: "Sol", duration: 1 },
      { name: "Sol", duration: 1 },
      { name: "Dó", duration: 1 },
      { name: "Mi", duration: 1 },
    ],
    result: [
      {
        times: 3,
        notes: [
          { name: "Sol", duration: 0.5 },
          { name: "Sol", duration: 1 },
          { name: "Sol", duration: 1 },
          { name: "Dó", duration: 1 },
          { name: "Mi", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 7,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.5 },
    ],
    result: [
      {
        times: 4,
        notes: [
          { name: "Ré", duration: 1 },
          { name: "Mi", duration: 1 },
          { name: "Fa", duration: 0.5 },
          { name: "Sol", duration: 0.5 },
        ],
      },
    ],
  },
  {
    level: 8,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.75 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.75 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.75 },
      { name: "Ré", duration: 1 },
      { name: "Mi", duration: 1 },
      { name: "Fa", duration: 0.5 },
      { name: "Sol", duration: 0.75 },
    ],
    result: [
      {
        times: 4,
        notes: [
          { name: "Ré", duration: 1 },
          { name: "Mi", duration: 1 },
          { name: "Fa", duration: 0.5 },
          { name: "Sol", duration: 0.75 },
        ],
      },
    ],
  },
  {
    level: 9,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
      { name: "Si", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
      { name: "Si", duration: 1 },
      { name: "Lá", duration: 1 },
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 0.5 },
      { name: "Dó", duration: 1 },
      { name: "Si", duration: 1 },
      { name: "Lá", duration: 1 },
    ],
    result: [
      {
        times: 3,
        notes: [
          { name: "Dó", duration: 0.5 },
          { name: "Ré", duration: 0.5 },
          { name: "Mi", duration: 0.5 },
          { name: "Dó", duration: 1 },
          { name: "Si", duration: 1 },
          { name: "Lá", duration: 1 },
        ],
      },
    ],
  },
  {
    level: 10,
    message: "REPITA A MESMA SEQUÊNCIA / REPEAT THE SAME SEQUENCE",
    notes: [
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 0.75 },
      { name: "Si", duration: 0.5 },
      { name: "Lá", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 0.75 },
      { name: "Si", duration: 0.5 },
      { name: "Lá", duration: 0.5 },
      { name: "Dó", duration: 0.5 },
      { name: "Ré", duration: 0.5 },
      { name: "Mi", duration: 1 },
      { name: "Dó", duration: 0.75 },
      { name: "Si", duration: 0.5 },
      { name: "Lá", duration: 0.5 },
    ],
    result: [
      {
        times: 3,
        notes: [
          { name: "Dó", duration: 0.5 },
          { name: "Ré", duration: 0.5 },
          { name: "Mi", duration: 1 },
          { name: "Dó", duration: 0.75 },
          { name: "Si", duration: 0.5 },
          { name: "Lá", duration: 0.5 },
        ],
      },
    ],
  },
  
];
