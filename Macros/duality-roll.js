const hopeRoll = await new Roll("1d12").roll();
const fearRoll = await new Roll("1d12").roll();

let rolledWith = '';
if (hopeRoll.total === fearRoll.total) {
    rolledWith = 'Critical Success';
} else if (hopeRoll.total > fearRoll.total) {
    rolledWith = 'Hope';
} else {
    rolledWith = 'Fear';
}

ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ token: actor }),
    flavor: `Rolled with ${rolledWith}`,
    content: `
    <div class="dice-roll">
        <div class="dice-result">
            <div class="dice-tooltip">
                <section class="tooltip-part">
                    <div class="dice">
                        <header class="part-header flexrow">
                            <span class="part-formula">1d12</span>
                            <span class="part-flavor">Fear</span>
                            <span class="part-total">${fearRoll.total}</span>
                        </header>
                        <ol class="dice-rolls">
                            <li class="roll die d12" style="color: #7a2c2c">${fearRoll.total}</li>
                        </ol>
                    </div>
                </section>
                <section class="tooltip-part">
                    <div class="dice">
                        <header class="part-header flexrow">
                            <span class="part-formula">1d12</span>
                            <span class="part-flavor">Hope</span>
                            <span class="part-total">${hopeRoll.total}</span>
                        </header>
                        <ol class="dice-rolls">
                            <li class="roll die d12" style="color: #4c857a">${hopeRoll.total}</li>
                        </ol>
                    </div>
                </section>
            </div>
            <h4 class="dice-total" style="display: flex; align-items: center; justify-content: center;">
                ${hopeRoll.total + fearRoll.total} with ${rolledWith}
            </h4>
        </div>
    </div>
    `
}, {});
