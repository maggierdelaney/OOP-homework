const Manager = require('../Manager');

describe('manager', () => {
    it('should return office number', () => {
        expect(Manager).toBe(this.officeNumber);
    });
    it('getRole() should return Manager', () => {
        const testManager = new Manager('maggie', 44, 'email@test.com', 'office')
        expect(testManager.getRole()).toBe('Manager');
    });
});