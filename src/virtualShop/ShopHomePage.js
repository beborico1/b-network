import React from 'react';

const ShopHomePage = () => {
  return (
    <div className="bg-pink-100 text-pink-600 h-screen flex flex-col">
      <section id="shop" className="p-8 grid grid-cols-3 gap-4">
        <div className="bg-pink-200 text-center p-4">
          <h3 className="text-2xl font-semibold">Dress Collection</h3>
          <img src="data:image/webp;base64,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" alt="Barbie Dress" className="mx-auto mt-4 h-32"/>
          <p className="mt-4 text-pink-700">Beautiful dresses for every occasion!</p>
        </div>
        <div className="bg-blue-200 text-center p-4">
          <h3 className="text-2xl font-semibold">Accessory Kit</h3>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAhgMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADsQAAIBAwEFBQYDBwQDAAAAAAECAwAEEQUGEiExQRMiUWFxFDKBkaHBFVKxByNCU4LR8DNikuEWF3L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAMBEAAgECBAQEBgIDAQAAAAAAAAECAxEEEiExBRNBUTJhcZEUIoGhwfAz0SNCUiT/2gAMAwEAAhEDEQA/APuNAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgIj6lZo2GnX16Cs7xdFOzkcuiSjq6B0IZWGQR1FXppq6OnqugUAoBQCgFAKAUBgnAyaAiwajbzMwV8bvU8Aa7YqjWhLZkoHIyCCK4WmaAweAoCrvtotH0+Ro73U7SGRfeR5QCPhUHUgtGzRTwmIqrNCDa9CxjkWWNZI2DIw3lI6g8qkZ2mnZnHSsTC77oKg4J6D49K+XlCTTdio6nR8/hVpnGeyXl6V9Hh/wCKPoixbEyrjooBQCgFAKAUAoDzIgkRkbkwwaHGrqxWtp8iKgV1lVOCo644etSuUOi0klqaf39ucntUYHwJTHrQh80e/wCDauqCFis3fAPvp/amW534hRdpEuC/tbnhFMpb8pOD8q5ZothWpz8LNX4NphuXum06zNw5y8xgXfb1OMmoZY3vY1c+rlyZnbtcmhccuVSKiA2nD8NuLNUjCSl+70wxz96zuj/icO9/uctoT40WONUQBVUYAHQVelZWR0r9SdllBWZoyqZAU8yT4fOrIK5XUdiuNxJJxaXe8i1XZUZ8ze7IM15c28hMEwTPQNw+VSyp7kc8lszptKlM2nwOc5KDOep5VllubIO8UyXXCQoBQCgFAMUBggEYIBHnQEe4sLacYkhXPivA/SuptFU6MJrVFRebPM3etp/6ZB9xViqdzBV4c3rCXuQTJremZ3hIYx499f7j6VK0JGXPjcPvt7r+zzFtBerNFdXMu9C+V9mhQeHA5PHPx8eHhFwsXwx8pSUnsT9O1a6lvx7bJBDDISEiPAjhw73U+njUXGyL6OMdSrZ6I6DIqB6BovLSO6j3WyrDkw5ipRk4kZRUtyludLvYz+7jSdfJt0/X+9WqoupQ6UuhHh0C8uJA0/Z20fgDvOft9a66qWxxUG9zpLS3S1t0giB3EGBk5Jqhu7uaUrKxurh0UAoBQCgMEgAknAFAVw17SzJuLews2cd05413Ky74era+Usq4UnhZEdiqupI5gHlQ601uejQ4cwuhzLfyR5ZoixcSt4E8R6/rVqmrHj1MFUlWaW3cXmzUs4bE0TkHudop4D08fOmclPh0ne0vc1Imr6XgAymNeH8xf+vpXfkZSli8P3t7on220BwBcwerRn7GouHY108ffxotLW/tbrHZTKW/KeDfI1Bpo2QrQn4WSq4WigFAKAUAoBQGu5i7e3kiJK76lcjpmh1OzucVc2d1pBI9ks2QNlZjAD9cc/WrtJHqwlTrbN+lyQNp76NN1ooZHzzA/UZpy0R+Bg3o2V4upL+ZjpmnXAvN7LOkhCb3XOeXzo9FqWOKpxtUkrHeIxjgBmYZVe+3IcuJqltLVnkbvQ02eoQ3iSSQCRo0/j3CA3/z4/CqqdaNRXjt+7dydSlKm7S3PdneQXsZe2ffUMVPAggjoQeNdp1YVFeLOTpyg7SRIqwgRbjT7a5/1Ylz+YcDXVJoqnQpz3RV3Oz/AFt5QfBZB9xU1PuZJ4LrBkXtdU073+0KD83fX59K7aLKs+Io77e5NttfQ4FzCV/3Icj5Vx030LqeOi/Gi0t7y3uVzBKr+QPEVBpo1wqwnrF3N9cLBQCgFAKAwcYwRwoDS9vbSbu/DE2OWUBxXdTqm1szcqqqgKAB0AFcOFdtCd3R7rHLc72Oi54/TNZsX/DK/wC9y/DfyxJ0YQIoQDdAGMcsVoVraFD3IFtj8fu+z93sI+0x+fLfXGKywX/pm12Xvr+DRL+CN+79tPyWdazOa55UgiaSRgqKMkmoykoxcnsdjFydkarSSWZN+aPswxyiE94Dz86jTlKSzSViU0k7J3JGKsIES50y0uMl4VDH+JeBrqk0U1MPTnuiqudnnU79tNkjlvcD86sVTuYp4Bp3gyP7Zq2m8JgzoP5gyPmKWjLYr52JoeJXRPs9oIJnSOZGjkc4HUE1Fwa1NNLHQm0noy6qBuFAR76eS3tZZYYGndBlY1PFq43ZXJQipSSbscZDtLtHq8Uq6VpkKjLKJzvYXBxyOADz8fSs6q1JbI9ieCwlBrmzfTT9uRNATU9ndUub3aM6l7M6YWQMZYkJOWZ8E4xwwcePKlPNB3ncsxTo4qnGnhlG6+jfZLv6XPoUEsc8KSwuskbqGVlOQw8RWhO54Ti4uz3MyxpLGySDKsCCD1FGk1ZhNp3RQx3d3pzjSUhNxOQTayM3dMY/Oefd5cuPCsCqVaT5CV30fl5+n3Njp06q517LqvPy9S102zFnEQXMksjF5ZCMF2PX7Vqo0lTja931fdmapUzvsuiJlXFZUbSuo08KRJvlwyFM8CCDxrzOLTy4eyTu9reWpqwifMuU2k62yahm/uZGVo91ABkZ4dB1ryuH8UlKs/iJaW0/UbMRhFy/8aOsgmjnhSaFw6OMqw6ivpoTjOKlHZnlSTi7MQzJMXCNncbcbyNIzUr26Bxatc2VI4YKgjBoCN+HWfbLMLdFkU5BUY/Su3ZVyaebNbUlVwtFAVG0k0qWKW8DmOW8mS2DrzUMe8R5hQxFQm9LdzRhYpzcpLSKb9tvvYsbS3htLdLe2jWOGMbqIo4AVJJJWRTKcpycpO7ZtYbwxXSJQ6JEuma3f6TCN22KLdwIOUe+WDqPLeXP9VVx+WTibcQ+bRhWfi8L87bP20+hf1YYjnJ9mzLrw1HtlEfaBjEMg8F8c+NebLh+bE8+/wBDfHG5cPyrfU6IHpXo3MBmugwRmgIC20Wl2c7W0LyZYydmvMk9B5VkjRhhacnTjfd2LnN1pJTduhxURvoriKALcmOKQSezDIPA55V8rTq4mFVU2no75T2ZKm4uWmulztNC3ns2nkRka4laXdcYIBPAEegFfWYW7hmkrNtv9+h4+Isp5V00LGtJQKAUAoBQFFtgzW2kjUUiMh0+ZLoqvMovv4/pLVXU0jfsa8Es9Xl/9Jr6vb72LqFg8auOTAGrDK1Z2PTMFGTyocKDQpo9U1nUNXt3ElruJa28g5SBcszDy3mx/TVcHmk5fQ2YiLpUo0Zb6t+V7WXsr/UubycW0DSkZwOA86oxuKWFoSqvoZoRzSsR9LMs0ZuZZC3ae6vQAVl4W6tWl8RVk25dOiXoSq2TyroY1SJ1ia5gdkljGeB4MPMU4nSqKm8RRk1KPno15oUmr5WtGbdMuxeWiyng3Jh4Gr+HYv4rDqo9+vqcqQySsbrmeO2heaVt1EGSa3EYxcpKKKqfVbyCBbyWwHsZwSVky6KepXH34VKyL40YSeRS1+xPgS2nkW+hVWeSMKJB1XniqeVBVOZb5trlMnJLI9kS6sICgFAKAUAoDzIqvGyOoZWGCCMgigvbVFVoVnd6Yslg7CSxix7JISd8J/LbPPd6HqMdRmoRTjp0NGIqwqtVFpJ79vVevY16udTvZvw+0BtIHH72+LLvYPNYl/N/uPAedcld6LRHaPKguZLV9F/fl5dfIs7G0gsbWG1tYxFDEoVEHQCppJKyKJzlUk5yd2zTrETTWUiocMveHwrz+KUOfhZxXTX21JUpZZortE1WCK3FvcusZX3WbkQePOvL4RxSlGiqNV2a29C6tRblmietZ1eBrZ7a2kWSSQbpZeSjqc1ZxTilJ0nSou7fbsco0XfNIkbOdkdOBjkDZY72DyPhWzg1NU8Il11v6kcRfOa9cIuZ7WyJ4O6sw8Rn+wavXjoSofIpTLaSNJYWicZR1KkeRqJnTs00c9sjM6Jc2UrZMD8PmQ31GfjVk11NuNirxmup0lVmEUAoBQCgFAKAweRxQHw7WNX1HUHlurq5cSh2VETOE4+6o6dB4+deZUlKUtTfGKUdDtv2Xa7e6jpuo/idz2sVlIqLNLwIG7khj5cD8a20ZNx1M1aKUtC3k2u0C5YwS3KGBjumRxhG+fTz5VCVWlP5Jao5yppXRIm0SG4dZYpR2cr7xK4xuY4BRy8ONefX4NRrTzd3d+ltkTjXklY8Wmz6gL7Q4O9GQwThutngVI8qhh+C0oWc9Xb790dliW9jGtalcQX8en2bqjdl2kkjLk4zj/DXupKwp04uGeXc5fULm5m1KOOS4cszKFYP3sAEkZGOHvVYtj0KUYqk3YlGB94MlzOHX3gJCc/X1qOYojV3TS1Ia3F3ZXxMNxIjneyw7xYc+Pxqbs0apKE6azI6DRdobmbUIbO5EMqyg7sqMAQRzBHLPlUHHS5gq4emoOcHsdWOVQMQoBQCgFAYzQFRtPrtvoemyTyuO3YEQRdXb0qE5qKuThByZ8iuFHct3LCYOJJAxOcsScHHXBrzG+puLHZ6Jrj9mW1cKboaO7MuBwJCrExB+C1thrSZnnpURzjwlYN5lJO7vZCkHl1rH1NKPsv7PVK7G6WC+/8Auic5zjLHh8OXwr0oeFGGr42dCeVTKzkNSLya/esM4jRFx8M/epdDdTSVKJBuY0iVZ5QpYcASOWfD4GiJU5uUsqNlmWdt8d4kEcuYHLP+daM5VVtiLer2V2pkwqscY3QcjpknpyPw9akti2F5Q9Dfom7JrdgJwrON88C3dPEjn+h8PSudCueZUZNbHejlUDzxQCgFAKA5fa6z2kmZZ9Avykarh7YKoZvMMQflwqmqqn+jLabgvEjhLlNStpfaZtH1e71M8FlusuEPiu6KxuNRv5jSpQ6MiXuzm1k4Se4sbpzPltyJgCOP8Xhnz+lTVGSWxzmxvY6hNnpdA/ZhqkFwpN1dK01yq/w53RjPkoFacrjSaM+bNUTOQs7m2mRY4ZY5ZGG4QRun69fnXnu6epsOm2R2kfZp/wAJ13Mdk7ZtbjGQnip8uvxrVRrJKzKatPN8yPolrqNleAey3lvNvDI7OUN+la1JPYyuLW6OX1a6jhvtR33w3aLgAcfdX/qp9jXTu1FHP3N3FJIpXAIPPiT4cvlUka4NKLf7/ZPtrsxW2cKoC90MefD7nH+cK4UzTnPuaHY3ABChIg3Fjx72eOM+vTHWpbFsbUnm3fZfkl7PsBq9svBZRId4Hm3A5x16enzrkiOK1i5X06H0AcqrPLFAKAUAoBQGMUBmgPE8Uc8LwzIHjkUq6sOBB5igPnn/AKthN2Wl1V2tu8UURYkXh3e/njj7VRyF3L+e+xGn2C2hwIU1KzuYAe77RvAgf8TWd4V30ZYsQi42X/Z9a6Texaheze0XcR3oxGNxEPj4nmefDyrRToqOrZXOu5KyOg1PZ2w1KYzzdqkrY3mifd3scs1ouRhVlFWRXDYbTM59ovvD/XNdzMl8RPyPf/hOlEgs922PzTZpnZJYqqtj2djNJPve0niG4zHn40zMj8TU/UTNP2d07T7r2q3jkM+Mb8khY/WuNtkZ1qk45W9C2rhUKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUB//Z" alt="Barbie Accessories" className="mx-auto mt-4 h-32"/>
          <p className="mt-4 text-blue-700">Stylish accessories to complete the look!</p>
        </div>
        <div className="bg-purple-200 text-center p-4">
          <h3 className="text-2xl font-semibold">Shoe Collection</h3>
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtZgj6Hm0dpGxVQmRGBgqqGRh1NepRLSv_LqM_5Rb2r_yX8iPoR0NBZCINq8zX20LzHOYxohgaj4RLhTt6XuNMzSqPra1TIchNah-QOmAsWMPjSLchkZ6AWQ&usqp=CAc" alt="Barbie Shoes" className="mx-auto mt-4 h-32"/>
          <p className="mt-4 text-purple-700">The perfect pair for every outfit!</p>
        </div>
      </section>
    </div>
  );
}

export default ShopHomePage;
