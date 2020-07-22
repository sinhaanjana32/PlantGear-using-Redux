import React from 'react'

const Empty = () => {
    return (
        <div>
            <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
        </div>
    )
}

export default Empty
