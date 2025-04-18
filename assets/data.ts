export const dataSource = [{
    country: 'USA',
    medals: 110,
  }, {
    country: 'China',
    medals: 100,
  }, {
    country: 'Russia',
    medals: 72,
  }, {
    country: 'Britain',
    medals: 47,
  }, {
    country: 'Australia',
    medals: 46,
  }, {
    country: 'Germany',
    medals: 41,
  }, {
    country: 'France',
    medals: 40,
  }, {
    country: 'South Korea',
    medals: 31,
  }];

  export type Employee = {
    id: number;
  
    firstName: string;
  
    lastName: string;
  
    gender: string;
  
    birthDate: Date;
  };
  
  let s = 123456789;
  function random() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  }
  
  export function generateData(count: number) {
    const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
    const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
    const gender = ['Male', 'Female'];
    const items: Employee[] = [];
    const startBirthDate = Date.parse('1/1/1975');
    const endBirthDate = Date.parse('1/1/1992');
  
    for (let i = 0; i < count; i += 1) {
      const birthDate = new Date(startBirthDate + Math.floor(
        (random() * (endBirthDate - startBirthDate)) / 10,
      ));
      birthDate.setHours(12);
  
      const nameIndex = random();
      const item = {
        id: i + 1,
        firstName: names[nameIndex],
        lastName: surnames[random()],
        gender: gender[Math.floor(nameIndex / 5)],
        birthDate,
      };
      items.push(item);
    }
  
    return items;
  }