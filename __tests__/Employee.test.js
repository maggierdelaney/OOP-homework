const Employee = require('../lib/Employee');

describe('employee', () => {
    const testEmployee = new Employee('maggie', 44, 'email@test.com')
    it('should return name', () => {
        expect(testEmployee.name).toBe('maggie');
    });
    it('should return id', () => {
        expect(testEmployee.id).toBe(44);
    });
    it('should return email', () => {
        expect(testEmployee.email).toBe('email@test.com');
    });
    it('getRole() should return Employee', () => {
        expect(testEmployee.getRole()).toBe('Employee');
    });
});