export const monthByNumber = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
};

export const numberByMonth = {
    Enero: 0,
    Febrero: 1,
    Marzo: 2,
    Abril: 3,
    Mayo: 4,
    Junio: 5,
    Julio: 6,
    Agosto: 7,
    Septiembre: 8,
    Octubre: 9,
    Noviembre: 10,
    Diciembre: 11
};

export const unit = {
    day: 'day',
    month: 'month',
    year: 'year'
};

export const getDaysInMonth = (year: number, month: number): number => {
    year = +(year);
    month = +(month) + 1;
    return new Date(year, month, 0).getDate();
};
