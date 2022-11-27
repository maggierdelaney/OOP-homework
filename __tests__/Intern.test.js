const Intern = require('../Intern');

describe('intern', () => {
    it('should return school', () => {
        expect(Intern).toBe(this.school);
    });
    it('getRole() should return Intern', () => {
        const testIntern = new Intern('maggie', 44, 'email@test.com', 'school')
        expect(testIntern.getRole()).toBe('Intern');
    });
});