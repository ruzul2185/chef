<?php
declare(strict_types=1);

namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ImageTypesTable;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ImageTypesTable Test Case
 */
class ImageTypesTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\ImageTypesTable
     */
    protected $ImageTypes;

    /**
     * Fixtures
     *
     * @var array
     */
    protected $fixtures = [
        'app.ImageTypes',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $config = $this->getTableLocator()->exists('ImageTypes') ? [] : ['className' => ImageTypesTable::class];
        $this->ImageTypes = $this->getTableLocator()->get('ImageTypes', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown(): void
    {
        unset($this->ImageTypes);

        parent::tearDown();
    }

    /**
     * Test validationDefault method
     *
     * @return void
     * @uses \App\Model\Table\ImageTypesTable::validationDefault()
     */
    public function testValidationDefault(): void
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
