const Engineer = require('../lib/Engineer');

describe('engineer', () => {
    const testEngineer = new Engineer('maggie', 44, 'email@test.com', 'engineergithub')
    it('should return github', () => {
        expect(testEngineer.github).toBe('engineergithub');
    });
    it('getRole() should return Engineer', () => {
        expect(testEngineer.getRole()).toBe('Engineer');
    });
});