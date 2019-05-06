const chai = require('chai');
const expect = chai.expect;
const Index = require('../lib/index');
describe('cpfValidator', () =>{       
  it('should return false for numbers other than 11', () =>{
    expect(Index.cpfValidator('01234567')).to.equal(false);          
  });
  it('should return false for information other than number', () =>{
    expect(Index.cpfValidator('adsfgrtyeui')).to.equal(false);          
  });
  it('should return false for equal numbers', () => {
    expect(Index.cpfValidator('00000000000')).to.equal(false);
  }); 
  it('If the result is equal to 10 or 11 you should return 0', () =>{
    expect(Index.cpfValidator('31832055809')).to.equal(true);
  });
  it('If the result is equal to 10 or 11 you should return 0', () =>{
    expect(Index.cpfValidator('31832055890')).to.equal(false);
  });
});     
