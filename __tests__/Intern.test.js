const Intern = require('../lib/Intern');

describe('intern', () => {
    const testIntern = new Intern('maggie', 44, 'email@test.com', 'school')
    it('should return school', () => {
        expect(testIntern.school).toBe('school');
    });
    it('getRole() should return Intern', () => {
        expect(testIntern.getRole()).toBe('Intern');
    });
});